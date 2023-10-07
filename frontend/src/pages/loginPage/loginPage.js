import React from "react";
import LoginForm from "../../components/loginPage/loginForm";
import LoginRegisterBlock from "../../components/loginPage/loginRegisterBlock";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="space-y-4">
        <LoginForm />
        <LoginRegisterBlock />
      </div>
    </div>
  );
};

export default LoginPage;
