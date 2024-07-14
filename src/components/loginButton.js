import React from 'react';
import '../App.css';

const LoginButton = () => {
  return (
    <div>
      <a className="login-button" href="http://localhost:5000/auth/google">Login with Google</a>
    </div>
  );
};

export default LoginButton;
