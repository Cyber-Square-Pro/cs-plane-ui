import { ProfileForm } from "@/components/forms/account/profile-form";
import { User } from "lucide-react";
import React from "react";
import { IProfile, TOnboardingSteps } from "@/types/user";
import { observer } from "mobx-react-lite";
import { Toast } from "@/lib/toast/toast";
import { ToastContainer } from "react-toastify";
import { FormHeading } from "@/components/form-elements/form-heading";
import FormDescription from "@/components/form-elements/form.description";

interface Props {
  stepChange: (
    steps: Partial<TOnboardingSteps>,
    formData?: IProfile
  ) => Promise<any>;
}

export const Profile: React.FC<Props> = observer((props) => {
  const { stepChange } = props;
  const toast = new Toast();

  const submitCode = async (formData: IProfile) => {
    toast.showToast("success", "Profile Updated");
    await stepChange({ profile_complete: true }, formData);
  };

  return (
    <div className="flex justify-center px-20 items-center h-full">
      <div className="max-w-2xl px-4 w-full">
        <div className="flex space-x-10">
          <FormHeading headingText="Setup your profile" />
          <div>
            <User className="mt-3" />
          </div>
        </div>

        <FormDescription
         descriptionText="Create your profile for the plane account." 
         />
        <div>
          <ProfileForm onSubmit={submitCode} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
});
