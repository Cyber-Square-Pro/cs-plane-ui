"use client"
import React, { useCallback } from "react";
import {SignInForm} from "@/components/forms/account/sign-in-form";
import { IEmailPasswordFormValues, IUser } from "@/types/user";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/auth.service";
import { Toast } from "@/lib/toast/toast";
import { ToastContainer } from "react-toastify";
import { useMobxStore } from "@/store/store.provider";

const SignInPage = () => {

  const router = useRouter();
  const authService = new AuthService();
  const toast = new Toast();

  const {
    user: { fetchCurrentUser },
  } = useMobxStore();

  const handleLoginRedirection = useCallback(

    (user: IUser) => {
      console.log('user is', user)
      if (!user.is_onboarded) {
        router.push("/onboarding");
        return;
      }
    },[router, ]
 )

 const mutateUserInfo = useCallback(() => {
    
  fetchCurrentUser().then((user) => {
    handleLoginRedirection(user);
  });
}, [fetchCurrentUser, handleLoginRedirection]);


 
  
  const onFormSubmit = (formData: IEmailPasswordFormValues) => {
    console.log('form', formData)
    return authService.userSignIn(formData).then((response) => {
       
      if (response?.status_code == 200) {
        toast.showToast("success", response?.message);
        mutateUserInfo()
        
      }
      else {
        toast.showToast("error", response?.message);
      }
    });
  };
  
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
      <ToastContainer />
    </div>
      
  );
};

export default SignInPage;
