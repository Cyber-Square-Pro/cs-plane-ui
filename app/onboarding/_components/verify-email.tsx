import { EmailVerificationForm } from '@/components/forms/account/email-verification'
import React from 'react';
import {FormHeading} from '@/components/form-elements/form-heading';
import { useMobxStore } from '@/store/store.provider';
import { ToastContainer } from 'react-toastify';
import { IVerificationCode, TOnboardingSteps } from '@/types/user';
import { EmailService } from '@/services/email.service';
import { Toast } from '@/lib/toast/toast';
import { observer } from "mobx-react-lite";
import FormDescription from '@/components/form-elements/form.description';


interface Props {
    stepChange: (steps: Partial<TOnboardingSteps>) => Promise<void>;
    userEmail: string 
}

export const VerifyEmail:React.FC<Props> =observer((props) => {

    const { stepChange, userEmail } = props

    const email = userEmail

    const {
        user: { currentUserEmail },
      } = useMobxStore();
      const emailService = new EmailService();
      const toast = new Toast();

      const submitCode = async (formData: IVerificationCode) => {
        return emailService.verifyEmail(formData).then(async (response) => {
          console.log(formData)
          if (response?.status_code == 200) {
            toast.showToast("success", response?.message);
             
           await stepChange({ email_verified: true });
            
          }
    
          if (response?.status_code == 405) {
            toast.showToast("error", response?.message);
          }
          
        });
      };



  return (
    <div className="flex justify-center items-center h-full">
    <div className="max-w-xl px-4 w-full">

      <FormHeading headingText="Moving to the runway" />
      
      <FormDescription descriptionText= "paste your code you got at" />
      

      <FormDescription descriptionText={<><span className="text-blue-700 font-bold px-2">{email}</span> below</>} />

      <div>
      <EmailVerificationForm onSubmit={submitCode}  />
      </div>
    </div>
    <ToastContainer />
  </div>
  )
})

