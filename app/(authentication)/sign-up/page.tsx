"use client";
import React from "react";
import { SignInForm } from "@/components/forms/account/sign-in-form";
import { SignUpForm } from "@/components/forms/account/sign-up-form";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/auth.service";
import { IEmailPasswordFormValues } from "@/types/user";
import { FormHeading } from "@/components/form-elements/form-heading";
import FormDescription from "@/components/form-elements/form.description";
import { Toast } from "@/lib/toast/toast";
import { ToastContainer } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();
  const authService = new AuthService();
  const toast = new Toast();

  const onFormSubmit = (formData: IEmailPasswordFormValues) => {
    
    return authService.userSignUp(formData).then((response) => {
      console.log(response?.status_code)
      if (response?.status_code == 201) {
        toast.showToast("success", response?.message);
        router.push("/onboarding")
      }
      if (response?.status_code == 409) {
        toast.showToast("error", response?.message);
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-xl px-4 w-full">
        <FormHeading headingText="Sign Up On Plane" />
        <FormDescription descriptionText="Create an account and track your issues, projects and workspaces." />
        <div>
          <SignUpForm onFormSubmit={onFormSubmit} />
        </div>
      </div>

      <ToastContainer />

    </div>
  );
};

export default SignUpPage;
