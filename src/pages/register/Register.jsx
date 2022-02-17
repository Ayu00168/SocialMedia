import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Csse Social</h3>
          <span className="loginDescription">
            Connect with your Friends here on Csse Social.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="UserName" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm password" className="loginInput" />
            <button className="loginBtn">Sign Up</button>
            <button className="loginRegisterButton">
              Login to your Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
