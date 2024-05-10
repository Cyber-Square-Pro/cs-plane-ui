import React from "react";

interface Props {
  descriptionText: React.ReactNode;
}

const FormDescription: React.FC<Props> = (props) => {
  const { descriptionText } = props;
  return (
    <p className="text-sm mb-4 text-center text-gray-700">
        {descriptionText}
    </p>
  );
};

export default FormDescription;
