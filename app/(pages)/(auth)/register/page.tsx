import { raleway } from "@/app/fonts";
import React from "react";
import SignUpForm from "./SignUpForm";

const RegisterPage = () => {
  return (
    <div className="w-full px-5 flex flex-col gap-6">
      <h2 className={`${raleway.className} font-semibold text-2xl`}>
        Create an account
      </h2>
      <SignUpForm />
      <span className="text-sm text-gray-500">
        Do you have an account?{" "}
        <a href="/signin" className="text-custom-blue font-bold">
          Sign in
        </a>
      </span>
    </div>
  );
};

export default RegisterPage;
