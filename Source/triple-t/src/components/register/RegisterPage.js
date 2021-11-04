import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="register">
        <div className="d-flex justify-content-center">
          <h1>Sign-up</h1>
        </div>
        <form>
          <div className="mb-1">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" id="name"></input>
          </div>
          <div className="mb-1">
            <label className="form-label">Surname</label>
            <input type="text" className="form-control" id="surname"></input>
          </div>
          <div className="mb-1">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email"></input>
          </div>
          <div className="mb-1">
            <label className="form-label">Cellphone</label>
            <input type="text" className="form-control" id="cellphone"></input>
          </div>
          <div className="mb-1">
            <label className="form-label">Date of birth</label>
            <input type="text" className="form-control" id="cellphone"></input>
          </div>
          <div className="mb-1">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" id="password"></input>
          </div>
          <div className="mb-1">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPpassword"
            ></input>
          </div>
          <div className="mt-3">
            <button type="button" className="btn btn-dark">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
