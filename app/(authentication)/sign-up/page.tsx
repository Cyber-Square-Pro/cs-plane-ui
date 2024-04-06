"use client";
import React from "react";
import { SignInForm } from "@/components/forms/account/sign-in-form";
import { SignUpForm } from "@/components/forms/account/sign-up-form";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/auth.service";
import { IEmailPasswordFormValues } from "@/types/user";

const SignUpPage = () => {
  const router = useRouter();
  const authService = new AuthService();

  const onFormSubmit = (formData: IEmailPasswordFormValues) => {
    console.log("---", formData);
    return authService.userSignUp(formData).then((response) => {
       
      if (response?.status_code == 201) {
        // toast.showToast("success", response?.message);
        // mutateUserInfo()
        
      }
      if (response?.status_code == 409) {
        // toast.showToast("error", response?.message);
      }
    });
  };

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
