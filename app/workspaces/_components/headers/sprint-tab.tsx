import React from 'react';
import { Star, Calendar, Users as UsersIcon } from 'lucide-react';
import 'tailwindcss/tailwind.css';
import IconCircle from '@/components/ui/icon-circle';

type TabComponentProps = {
    title: string;
    startDate: Date;
    endDate: Date;
    state: string;
    isFavorite: boolean;
    onFavoriteToggle: () => void;
};

const TabComponent: React.FC<TabComponentProps> = ({ title, startDate, endDate, state, isFavorite, onFavoriteToggle }) => {
    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

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
            </div>
        </div>
    );
};

export default TabComponent;
