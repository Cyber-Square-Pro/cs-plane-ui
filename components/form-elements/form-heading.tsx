import React from "react";

interface Props {
  headingText: string;
}

export const FormHeading: React.FC<Props> = (props) => {
    const { headingText } = props
  return (
    <h1 className="font-semibold text-[32px] mb-4 text-center">
      {headingText}
    </h1>
  );
};

