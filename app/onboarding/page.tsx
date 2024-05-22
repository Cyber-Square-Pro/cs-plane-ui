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
  // const {
  //   user: { currentUser, updateCurrentUser, setCurrentUserEmail },
  // } = useMobxStore();

 

   



const handleStepChange = (onboardingStep: Partial<TOnboardingSteps>) => {
 
  console.log('handle step change', onboardingStep)
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
    console.log('changing step',user.onboarding_step)
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

                <VerifyEmail userEmail = {email} handleStepChange = {handleStepChange} />
              </div>
            )}

            {step == 2 && (
              <div>
                <Profile user={user} handleStepChange={handleStepChange}/>
              </div>
            )}

            {step == 3 && (
              <div>
                <Workspace user={user}  handleStepChange={handleStepChange}/>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
});

export default OnBoardingPage;
