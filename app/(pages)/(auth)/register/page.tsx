"use client"

import { raleway } from "@/app/fonts";
import SignUpForm from "./SignUpForm";
import { useUser } from "@/hooks/useUser";
import { redirect } from "next/navigation";

const RegisterPage = () => {
  const { user } = useUser()

  if (user) {
    return redirect("/")
  }

  if (user === false) {
    return null
  }

  return (
    <div className="pb-6 md:py-5 w-full px-5 flex flex-col gap-6">
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
