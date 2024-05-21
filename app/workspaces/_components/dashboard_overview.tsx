"use client";
import React, { useEffect, useState } from "react";
import { LayoutGrid, ArrowDown, Search } from "lucide-react";
import Card from "./card";


interface DashboardProps {
  username: string;
  email: string;
}

const DashboardOverView: React.FC = (
) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    const minuteInterval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);

    const hourInterval = setInterval(() => {
      updateGreeting();
    }, 500);

    return () => {
      clearInterval(minuteInterval);
      clearInterval(hourInterval);
    };
  }, []);

  const updateGreeting = () => {
    const hour = currentDateTime.getHours();
    let greetingMessage = 'Good ';

    var split_afternoon = 12 //24hr time to split the afternoon
    var split_evening = 17 //24hr time to split the evening

    if (hour >= split_afternoon && hour <= split_evening) {
      greetingMessage += "afternoon,";
    } else if (hour >= split_evening) {
      greetingMessage += "evening,";
    } else {
      greetingMessage += "morning,";
    }

    setGreeting(greetingMessage);
  };



  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleString('en-US', options);
  };
  return (
    <>
      {/* header starts  */}
      

      {/* main section starts here  */}
      <div className="h-full w-full overflow-hidden">
        <div className="relative h-full w-full overflow-x-hidden overflow-y-scroll scrollbar-md">
          <div className="space-y-7 p-7 bg-slate-100 h-full w-full flex flex-col overflow-y-auto vertical-scrollbar scrollbar-md mb-6">
            {/* greeting and time display starts */}
            <div>
              <h3 className="text-xl font-semibold"> {greeting}</h3>
              <h6 className="flex items-center gap-2 text-xl font-semibold  text-[#a3a3a3]">
                <div>{formatDate(currentDateTime)}</div>
              </h6>
            </div>

            {/* greeting and time display ends */}

            <div className="grid lg:grid-cols-2 gap-7">
              <div className="lg:col-span-2">
                <div className="bg-[#ffffff] rounded-xl border-[0.5px]  w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2  p-0.5 hover:shadow-md duration-300 [&>div>a>div]:border-r [&>div:last-child>a>div]:border-0 [&>div>a>div]:border-2[&>div:nth-child(2)>a>div]:border-0 [&>div:nth-child(2)>a>div]:lg:border-r ">
                  <div className="w-full flex flex-col gap-2 hover:bg-slate-50 rounded-tl-xl lg:rounded-l-xl">
                    <a
                      href="#"
                      className="py-4 duration-300 rounded-[10px] w-full "
                    >
                      <div className="relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center">
                        <div>
                          <h5 className="font-semibold text-xl"> 0</h5>
                          <p className="custom-text-color text-sm xl:text-base">
                            {" "}
                            Issues Assigned
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full flex flex-col gap-2 hover:bg-slate-50 rounded-tl-xl lg:rounded-l-xl">
                    <a
                      href="#"
                      className="py-4 duration-300 rounded-[10px] w-full "
                    >
                      <div className="relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center">
                        <div>
                          <h5 className="font-semibold text-xl"> 0</h5>
                          <p className="custom-text-color text-sm xl:text-base">
                            {" "}
                            Issues Created
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>{" "}
                  <div className="w-full flex flex-col gap-2 hover:bg-slate-50 rounded-tl-xl lg:rounded-l-xl">
                    <a
                      href="#"
                      className="py-4 duration-300 rounded-[10px] w-full "
                    >
                      <div className="relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center">
                        <div>
                          <h5 className="font-semibold text-xl"> 0</h5>
                          <p className="custom-text-color text-sm xl:text-base">
                            {" "}
                            Issues Overdued
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>{" "}
                  <div className="w-full flex flex-col gap-2 hover:bg-slate-50 rounded-tl-xl lg:rounded-l-xl">
                    <a
                      href="#"
                      className="py-4 duration-300 rounded-[10px] w-full "
                    >
                      <div className="relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center">
                        <div>
                          <h5 className="font-semibold text-xl"> 0</h5>
                          <p className="custom-text-color text-sm xl:text-base">
                            {" "}
                            Issues Completed
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* render work status starts  */}

<Card title="Assigned to you"/>
<Card title="Assigned to you"/>
<Card title="Assigned to you"/>
<Card title="Assigned to you"/>
<Card title="Assigned to you"/>
<Card title="Assigned to you"/>

              {/* render work ends starts  */}
              {/* render active-members */}
              <div className="lg:col-span-2">
          
              </div>
              {/* render active-members ends */}



            </div>
          </div>
        </div>
      </div>
      {/* main section ends here  */}
    </>

  );
};

export default DashboardOverView;