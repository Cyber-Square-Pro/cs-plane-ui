"use client"
import React from "react";
import {SignInForm} from "@/components/forms/account/sign-in-form";
import { SignUpForm } from "@/components/forms/account/sign-up-form";

const SignUpPage = () => {

  const onFormSubmit = async () => {};

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-xl px-4 w-full">
        <h1 className="font-semibold text-4xl mb-4 text-center">
         Sign Up On Plane
        </h1>
        <p className="text-sm mb-4 text-center text-gray-700">
          Create an account and track your issues, projects and workspaces.
        </p>
        <div>
          <SignUpForm onFormSubmit={onFormSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
