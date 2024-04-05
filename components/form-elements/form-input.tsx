import React from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

interface IFormInput {
  type: string,
  name: string;
  placeholder: string;
  className?: string;  
}

const FormInput: React.FC<IFormInput> = (props) => {
  const { type, name, placeholder, className } = props;

  const { register } = useForm();
  return (
    <Input
      type={type}
      className={className}
      placeholder={placeholder}
      {...register(name)}
    />
  );
};

export default FormInput;
