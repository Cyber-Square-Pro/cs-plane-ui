"use client"
import React, { useEffect, useState } from "react";
import DashboardIssueCard from "./cards/dashboard-issue-card";
import IssueStatusCard from "./cards/issue-status-card"; 

const DashboardOverView: React.FC = () => {
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

    const split_afternoon = 12; //24hr time to split the afternoon
    const split_evening = 17; //24hr time to split the evening

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
      <div className="h-full w-full overflow-hidden">
        <div className="relative h-full w-full overflow-x-hidden overflow-y-scroll scrollbar-md">
          <div className="space-y-7 p-7 bg-zinc-100 h-full w-full flex flex-col overflow-y-auto vertical-scrollbar scrollbar-md mb-6">
            <div>
              <h3 className="text-xl font-semibold">{greeting}</h3>
              <h6 className="flex items-center gap-2 text-xl font-semibold  text-[#a3a3a3]">
                <div>{formatDate(currentDateTime)}</div>
              </h6>
            </div>

            <div className="grid lg:grid-cols-2 gap-7">
              <div className="lg:col-span-2">
                <div className="bg-[#ffffff] rounded-xl border-[0.5px] w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 p-0.5 hover:shadow-md duration-300 [&>div>a>div]:border-r [&>div:last-child>a>div]:border-0 [&>div>a>div]:border-2[&>div:nth-child(2)>a>div]:border-0 [&>div:nth-child(2)>a>div]:lg:border-r">
                  <IssueStatusCard count={0} description="Issues Assigned" />
                  <IssueStatusCard count={0} description="Issues Created" />
                  <IssueStatusCard count={0} description="Issues Overdue" />
                  <IssueStatusCard count={0} description="Issues Completed" />
                </div>
              </div>

              <DashboardIssueCard title="Assigned to you" description="Issues assigned to you that are pending will show up here." />
              <DashboardIssueCard title="Created by you" description="Issues created by you that are pending will show up here." />
              <DashboardIssueCard title="Assigned by state" description="Issue assigned to you, broken down by state, will show up here." />
              <DashboardIssueCard title="Assigned by priority" description="Issues assigned to you, broken down by priority will show up here." />
              <DashboardIssueCard title="Your issue activities" description="All your issue activities across projects will show up here." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOverView;
