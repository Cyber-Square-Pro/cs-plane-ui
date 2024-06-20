import React from 'react';
import { Star, Calendar, Users as UsersIcon } from 'lucide-react';
import 'tailwindcss/tailwind.css';
import IconCircle from '@/components/ui/icon-circle';
import Dropdown from '../dropdowns/sprint-edit-dropdown';
import { formatDate } from '@/lib/calendar/calendar';
/*
    Author: Ramshija.k.k on June 1st, 2024
    Purpose:To display issues in active,completed and upcoming sprints with
    calendar column,user icon for assignees display.star icon for making 
    favourite,dropdown for edit, delete ,copy link .
    children
      -iconcircle:for displaying percentage of work done in circle icon
      -dropdown:for editing,deleting,copying link etc in each issues displayed
      under sprints*/



interface Props {
    title: string;
    startDate: Date;
    endDate: Date;
    state: string;
    isFavorite: boolean;
    onFavoriteToggle: () => void;
};

 export const TabComponent: React.FC<Props> = (props) => {
    const { title, startDate, endDate, state, isFavorite, onFavoriteToggle } = props
   
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
            <div className="flex items-center space-x-6"> {/* Increased space between items */}
                <IconCircle/>
                <span>{title}</span>
                <div className="flex items-center space-x-6 text-gray-500 border border-gray-300 p-2 rounded-lg">
                    <Calendar />
                    <span>{`${formatDate(startDate)} → ${formatDate(endDate)}`}</span>
                </div>
                <div className="flex items-center text-green-500 space-x-6"> {/* Added correct color class */}
                    <span>{state}</span>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <UsersIcon />
                <button onClick={onFavoriteToggle} className="focus:outline-none">
                    <Star className={`text-lg ${isFavorite ? 'text-yellow-500' : 'text-gray-500'}`} />
                </button>
                <Dropdown/>
            </div>
        </div>
    );
};


