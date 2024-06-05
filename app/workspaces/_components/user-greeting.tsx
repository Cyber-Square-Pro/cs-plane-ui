// Greeting.tsx
"use client";
import { IUser } from "@/types/user";
import React, { useEffect, useState } from "react";

/* 
  Author:  Reshma LB on April 23rd, 2024
  Purpose: Display greetings on the dashboard 
  Props: diplayName
  Updated by: - Mohammed Rifad on June 2nd, 2024 - Props added 
*/
interface Props {
  displayName: string;
}

export const UserGreeting: React.FC<Props> = (( props ) => {
  const { displayName } = props
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
  }, [currentDateTime]);

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
    <div>
      <h3 className="text-xl font-semibold">{greeting} {displayName}</h3>
      <h6 className="flex items-center gap-2 text-xl font-semibold text-[#a3a3a3]">
        <div>{formatDate(currentDateTime)}</div>
      </h6>
    </div>
  );
});
