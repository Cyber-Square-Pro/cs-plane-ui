"use client";
import React, { useState } from "react";
import { observer } from "mobx-react-lite";

const OnBoardingPage = observer(() => {
  const [step, setStep] = useState<number | null>(null);

  return (
     <div>
        main content
     </div>
  );
});

export default OnBoardingPage;
