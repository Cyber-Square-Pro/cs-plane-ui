"use client";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { VerifyEmail } from "./_components/verify-email";
import { Profile } from "./_components/profile";
import {Workspace} from "./_components/workspace";
import { useUserAuth } from "@/hooks/use-user-auth";
import { useMobxStore } from "@/store/store.provider";
import { Spinner } from "@/components/spinner";
import { IProfile, IUser, TOnboardingSteps } from "@/types/user";

const OnBoardingPage = observer(() => {
  const [step, setStep] = useState<number | null>(1);
  


  const { user } = useUserAuth("onboarding");
  const email = user?.email ?? ""
  const {
    user: { currentUser, updateCurrentUser, setCurrentUserEmail },
  } = useMobxStore();

  console.log("user is", user);

  if (user) {
    console.log("eee");
    setCurrentUserEmail(user.email);
  }



const stepChange = async ( steps: Partial<TOnboardingSteps>,
  formData?: IProfile) => {
  if (!user) return;

  const updatedOnboardingSteps: Partial<TOnboardingSteps> = {
    ...user.onboarding_step,
    ...steps,
  };

  const payload: Partial<IUser> = {
    onboarding_step: updatedOnboardingSteps,
    ...(formData && { ...formData }),
  };

  await updateCurrentUser(payload);
  handleStepChange(updatedOnboardingSteps);
};

const handleStepChange = (onboardingStep: Partial<TOnboardingSteps>) => {
  console.log(onboardingStep, "steppppppppppp");
  if (!onboardingStep?.email_verified) {
    setStep(1);
    return;
  }

  if (!user?.is_onboarded) {
    if (!onboardingStep?.profile_complete) {
      setStep(2);
      return;
    }

    if (
      onboardingStep?.email_verified &&
      onboardingStep.profile_complete &&
      !onboardingStep.workspace_create
    ) {
      setStep(3);
      return;
    }
  }
};

useEffect(() => {
  // Trigger step change whenever user or its dependencies change
  if (user) {
    handleStepChange(user.onboarding_step);
  }
}, [user]);

  
  console.log(user, "//");

  return (
    <>
      {!user ? (
        <div className="flex justify-center items-center h-full">
          <Spinner size="large" />
        </div>
      ) : (
        <>
          <div className="flex">
            {step == 1 && (
              <div>
                <VerifyEmail userEmail = {email} stepChange = {stepChange} />
              </div>
            )}

            {step == 2 && (
              <div>
                <Profile stepChange={stepChange} />
              </div>
            )}

            {step == 3 && (
              <div>
                <Workspace  />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
});

export default OnBoardingPage;
