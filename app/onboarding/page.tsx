"use client";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { VerifyEmail } from "./_components/verify-email";
import { Profile } from "./_components/profile";
import { Workspace } from "./_components/workspace";
import { useUserAuth } from "@/hooks/use-user-auth";
import { Spinner } from "@/components/spinner";
import { TOnboardingSteps } from "@/types/user";

/*
  Author: Mohammed Rifad on April 14th, 2024
  Purpose: Renders onboarding steps (email verication, profile and workspace)
  Props: None

*/


const OnBoardingPage = observer(() => {

  const [step, setStep] = useState<number | null>(1);
  const { user } = useUserAuth("onboarding");
  const email = user?.email ?? ""

  /*
   Purpose: Handles the change of onboarding steps based on the user's current onboarding state.
   Parameters: {Partial<TOnboardingSteps>} onboardingStep - An object containing the current state of the onboarding steps.
   Return: None
 */

  const handleStepChange = (onboardingStep: Partial<TOnboardingSteps>) => {
 
     // Check if the email is not verified
    if (!onboardingStep?.email_verified) {

      // Set the step to 1 if the email is not verified
      setStep(1);
      return;
    }

    // Check if the user is not fully onboarded
    if (!user?.is_onboarded) {

      // Check if the profile is not complete
      if (!onboardingStep?.profile_complete) {

        // Set the step to 2 if the profile is not complete
        setStep(2);
        return;
      }
      
      // Check if the email is verified, profile is complete, but workspace is not created
      if (
        onboardingStep?.email_verified &&
        onboardingStep.profile_complete &&
        !onboardingStep.workspace_create
      ) {

      // Set the step to 3 if the workspace is not created
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

  return (
    <>
      {/* Check if the user object is not available */}
      {!user ? (
        <div className="flex justify-center items-center h-full">
          {/* Show a spinner if the user is not loaded */}
          <Spinner size="large" />
        </div>
      ) : (
        <>
          <div className="flex">

            {/* Renders corresponding component based on step value */}
            {step == 1 && (
              <div>
                <VerifyEmail 
                userEmail = {email} 
                handleStepChange = {handleStepChange} 
                />
              </div>
            )}

            {step == 2 && (
              <div>
                <Profile 
                user = {user} 
                handleStepChange = {handleStepChange}
                />
              </div>
            )}

            {step == 3 && (
              <div>
                <Workspace 
                user = {user}  
                handleStepChange = {handleStepChange}
                />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
});

export default OnBoardingPage;
