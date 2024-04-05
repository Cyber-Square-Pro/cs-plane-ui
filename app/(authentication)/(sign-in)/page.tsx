"use client"
import React from "react";
import {SignInForm} from "@/components/forms/account/sign-in-form";

const SignInPage = () => {

  const onFormSubmit = async () => {};

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-xl px-4 w-full">
        <h1 className="font-semibold text-3xl mb-4 text-center">
          Welcome Back, let&apos;s get you on board
        </h1>
        <p className="text-sm mb-4 text-center  text-gray-700">
          Get back to your issues, projects and workspaces.
        </p>
        <div>
          <SignInForm onFormSubmit={onFormSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
