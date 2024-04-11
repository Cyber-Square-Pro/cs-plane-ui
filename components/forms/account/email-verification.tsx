import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toast } from "@/lib/toast/toast";
import { EmailService } from "@/services/email.service";
import { IVerificationCode } from "@/types/user";
import Link from "next/link";
import React from "react";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailCodeValidator, TEmailCodeValidator } from "@/lib/validators/account/email_code.validator";

interface Props {
  onSubmit: (formData: IVerificationCode) => Promise<void>;
  // onSubmit (formData: IVerificationCode) => Promise<void>
}

export const EmailVerificationForm: React.FC<Props> = observer((props) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<TEmailCodeValidator>({
    resolver: zodResolver(EmailCodeValidator)
  });

  const { onSubmit } = props;
  const emailService = new EmailService();
  const toast = new Toast();

  const handleRequestNewCode = () => {
    return emailService.requestCode().then((response) => {
      console.log(response?.status_code);
      if (response?.status_code == 200) {
        console.log("Verification Code: ", response?.code);
        toast.showToast("success", response?.message);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-2">
        <Input
          className="w-full border rounded-md"
          placeholder="get-set-fly"
          {...register("code")}
        />
      </div>

      <div className="py-2 flex justify-end">
        <span
          className=" text-sm max-w-prose text-muted-foreground cursor-pointer  hover:text-slate-800"
          onClick={handleRequestNewCode}
        >
          Request code
        </span>
      </div>
      <div className="py-2">
        <Button
          className="w-full border rounded-md"
          disabled={!isValid}
          type="submit"
        >
          Continue
        </Button>
      </div>
    </form>
  );
});
