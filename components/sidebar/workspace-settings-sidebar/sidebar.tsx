import React, { FC, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { IWSidebarItem } from '@/types/workspace';

interface Props {
  RouteList: IWSidebarItem[];
}

const WSidebar: FC<Props> = ({ RouteList }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (href: string, key: string) => {
    router.push(href);
    setActiveItem(key); // Update activeItem state to mark the clicked item as active
  };

  return (
    <div className='flex flex-col w-full'>
      {RouteList.map(({ key, label, href }) => {
        const isActive =
          activeItem === key ||
          (pathname === '/' && href === '/') ||
          (pathname === href || pathname?.startsWith(`${href}/`));

        return (
          <button
            key={key}
            onClick={() => handleClick(href, key)} // Pass href and key to handleClick function
            className={cn(
              'flex items-center gap-x-2 text-[13px] font-[500] pl-3 transition-all hover:bg-gray-200 rounded-md mt-1',
              isActive && 'text-sky-600 bg-blue-200/30 hover:bg-blue-200/30 hover:text-sky-600'
            )}
          >
            <div className='flex items-center gap-x-2 py-2'>
              {label}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default WSidebar;
