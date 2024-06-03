import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
/*
  Author: Ridhwan on May 30th, 2024
  Purpose: Renders an empty state page 
  Props:
    - title: string - The title of the empty state page.
    - description: string - The description of the empty state page.
    - btntext: string - The text for the button.
    - imgsrc: string - The source for the image to be displayed.
    - linkpath?: string - Optional. If provided, the button will be rendered as a link.
*/

interface Props {
  title: string;
  description: string;
  btntext: string;
  imgsrc: string;
  linkpath?: string;
}

const EmptyStatePage: React.FC<Props> = ({ title, imgsrc, description, btntext , linkpath}) => {
  return (
    <div className="flex items-center justify-center h-full w-full overflow-y-auto py-10 px-5">
      <div className="flex flex-col gap-8 md:min-w-[24rem] max-w-[45rem] items-center">
        <Image src={imgsrc} alt="image" width={250} height={250}/>
        <div className="flex flex-col gap-1.5 items-center">
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
        <div className="flex items-center justify-center w-full">
          <Link href={`${linkpath}`}>
          <Button className="h-[30px] bg-blue-500">{btntext}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyStatePage;
