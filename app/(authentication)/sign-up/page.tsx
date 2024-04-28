"use client";
import React from "react";
import { SignInForm } from "@/components/forms/account/sign-in-form";
import { SignUpForm } from "@/components/forms/account/sign-up-form";
import { useRouter } from "next/navigation";
import { IEmailPasswordFormValues } from "@/types/user";
import { FormHeading } from "@/components/form-elements/form-heading";
import FormDescription from "@/components/form-elements/form.description";
import { Toast } from "@/lib/toast/toast";
import { ToastContainer } from "react-toastify";


const SignUpPage = () => {
  
  const router = useRouter();
  const toast = new Toast();

  const onFormSubmit = async (formData: IEmailPasswordFormValues) => {
    const response = await fetch("/api/auth/sign-up", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();

   
    if (responseData.statusCode == 201) {

      
      toast.showToast("success", responseData.message);

      
      setTimeout(() => {
        router.push("/onboarding");
      }, 1000);

    } 
    
    else {
      toast.showToast("error", responseData.message);
    }
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
