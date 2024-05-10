import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props{
  height: number
  width: number
}

export const Logo:React.FC<Props> = (props) => {
  const { height, width } = props
  return (
    <Link href="/">
      <div className="pt-7">
        <Image src="/cs-pro-logo.jpeg" alt="logo" height= {height} width={width} />
      </div>
    </Link>
  );
};
