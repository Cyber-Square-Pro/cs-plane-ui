
import React from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  modalHeading: string;
  modalText: string;
  btnText: string;
  modalImg: string;
} 
const EmptyPageCreate: React.FC<Props> = ({ modalHeading , modalImg , modalText , btnText }) => {
  return (
    <div className="flex items-center justify-center min-h-full min-w-full overflow-y-auto py-10 md:px-20 px-5">
      <div className="flex flex-col gap-5 md:min-w-[24rem] max-w-[45rem]">
        <div className="flex flex-col gap-1.5 flex-shrink">
          <h3 className="text-xl font-semibold">{modalHeading}</h3>
          <p className="text-sm">{modalText}</p>
        </div>
        <img src={modalImg} alt="image" loading="lazy" width="384" height="250" decoding="async" style={{ color: "transparent", width: "100%", height: "auto" }} />
        <div className="relative flex items-center justify-center gap-2 flex-shrink-0 w-full">
          <Button>{btnText}</Button>
        </div>
      </div>
    </div>
  );
}

export default EmptyPageCreate;