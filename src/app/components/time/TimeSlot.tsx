import * as React from "react";
import { TimeSlotProps } from "@/app/model/types";

interface ExtendedTimeSlotProps extends TimeSlotProps {
    onClick?: () => void;
    time: string;
    initials: string;
    isSelected: boolean;
    onDragStart: (e: React.DragEvent) => void;
}

export const TimeSlot: React.FC<ExtendedTimeSlotProps> = ({
                                                              time,
                                                              initials,
                                                              isSelected = false,
                                                              onClick,
                                                              onDragStart,
                                                          }) => {
    const handleDragStart = (e: React.DragEvent) => {
        e.dataTransfer.setData(
            "text/plain",
            JSON.stringify({time, initials})
        );
        if (onDragStart) {
            onDragStart(e);
        }
    };

    return (
        <div
            className="flex overflow-hidden gap-5 justify-between px-2.5 py-1.5 w-full text-xs whitespace-nowrap bg-orange-300 rounded border border-solid shadow-sm border-black border-opacity-0 text-zinc-900"
            onClick={onClick}
            draggable
            onDragStart={handleDragStart}
        >
            <div className="flex gap-1">
                <div className="overflow-hidden px-1.5 w-6 h-6 leading-loose bg-teal-400 rounded-xl">
                    {initials}
                </div>
                <div className="my-auto leading-none">{time}</div>
            </div>
            <div
                role="checkbox"
                aria-checked={isSelected}
                tabIndex={0}
                className={`flex shrink-0 my-auto ${
                    isSelected? "bg-teal-200" : "bg-white"
                } rounded-sm border border-solid border-zinc-900 h-[11px] w-[11px]`}
            />
        </div>
    );
};
