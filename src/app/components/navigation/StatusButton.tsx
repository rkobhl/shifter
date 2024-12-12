import * as React from 'react';
import { StatusButtonProps } from "@/app/model/types";


export const StatusButton: React.FC<StatusButtonProps> = ({label}) => {
    return (
        <button
            className="flex overflow-hidden gap-1.5 px-2.5 my-auto text-sm font-medium leading-7 rounded-md border border-solid border-black border-opacity-0 text-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            tabIndex={0}
        >
            <div className="flex shrink-0 my-auto w-3 h-3 rounded-md border border-solid border-neutral-400"/>
            <div>{label}</div>
        </button>
    );
};