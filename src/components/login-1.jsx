const Login = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target)
    const reqData = new FormData(e.target);
    console.log(reqData)
    const obj = {};
    reqData.forEach((key, value) => {
      obj[key] = value;
    });
    for (const key of reqData.keys()) {
        console.log(key);
      }
    try {
      const res = await fetch(
        "https://bizidex-backend.cloudmlmdemo.com/api/login",
        { method: "POST", body: reqData }
      ).then((response) => response.json());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={onSubmit}>
        <input type="text" label="email" name="email" />
        <input type="text" label="Password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
