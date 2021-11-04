import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="login">
        <div className="d-flex justify-content-center">
          <h1>Login</h1>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
            ></input>
          </div>
          <div className="mb-3">
            <button type="button" className="btn btn-dark">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
