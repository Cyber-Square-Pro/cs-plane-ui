import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-xl px-4 w-full">
        <h1 className="font-semibold text-3xl mb-4 text-center">
          Welcome Back, let&apos;s get you on board
        </h1>
        <p className="text-sm mb-4 text-center text-muted text-gray-700">
          Get back to your issues, projects and workspaces.
        </p>
        <div className="py-2">
          <Input
            className="w-full border rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="py-2">
          <Input
            className="w-full border rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <div className="py-2">
          <Button className="w-full border rounded-md" type="submit">
            Login
          </Button>
        </div>
        <div className="py-2 text-center">
          <span className="bg-slate-50"> Dont have an account?</span>
          <Link href="/sign-up"> Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
