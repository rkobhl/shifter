import * as React from 'react';
import { NavButtonProps } from "@/app/model/types";


export const TaskBarButton: React.FC<NavButtonProps> = ({text, hasBorder = false}) => {
    const borderClass = hasBorder? 'border-zinc-600' : 'border-black border-opacity-0';

    return (
        <div
            role="button"
            tabIndex={0}
            className={`overflow-hidden px-6 rounded-md border border-solid ${borderClass} max-md:pl-5`}
        >
            {text}
        </div>
    );
};