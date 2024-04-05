"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SignUpValidator, TSignUpValidator } from "@/lib/validators/account/signup.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
interface ISignUpForm {
  onFormSubmit: () => Promise<void>;
}

export const SignUpForm: React.FC<ISignUpForm> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpValidator>({
    resolver: zodResolver(SignUpValidator),
  });
  const { onFormSubmit } = props;

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="py-2">
        <Input
         className={cn({
          "focus-visible:ring-red-500 px-4 py-2 border border-white rounded-md w-full":
            errors.password,
        })}
          placeholder="Enter your email"
          {...register("email")}
        />
        {errors?.email && (
          <p className="text-sm text-red-500 mt-3">{errors.email?.message}</p>
        )}
      </div>

      <div className="py-2">
        <Input
          className={cn({
            "focus-visible:ring-red-500 px-4 py-2 border border-white rounded-md w-full":
              errors.password,
          })}
          placeholder="Enter your password"
          {...register("password")}
        />
        {errors?.password && (
          <p className="text-sm text-red-500 mt-3">{errors.password?.message}</p>
        )}
      </div>
      <div className="py-2">
        <Input
           className={cn({
            "focus-visible:ring-red-500 px-4 py-2 border border-white rounded-md w-full":
              errors.confirmPassword,
          })}
          placeholder="Re-type password"
          {...register("confirmPassword")}
        />
        {errors?.password && (
          <p className="text-sm text-red-500 mt-3">{errors.confirmPassword?.message}</p>
        )}
      </div>
      <div className="py-2">
        <Button className="w-full border rounded-md" type="submit">
          Signup
        </Button>
      </div>
      <div className="py-2 text-center">
        <span className="bg-slate-50">Already have an account?</span>
        <Link href="/"> Login</Link>
      </div>
    </form>
  );
};
