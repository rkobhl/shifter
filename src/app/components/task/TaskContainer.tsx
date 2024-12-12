"use client";
import * as React from "react";
import { TimeSlot } from "@/app/components/time/TimeSlot";

interface TaskContainerProps {
    dayName: string;
    tasks?: { time: string; initials: string }[];
    removeTimeSlot: (day: string, timeSlot: { time: string; initials: string }) => void;
    addTimeSlot: (day: string, timeSlot: { time: string; initials: string }) => void;
}

export const TaskContainer: React.FC<TaskContainerProps> = ({
                                                                dayName,
                                                                tasks = [],
                                                                removeTimeSlot,
                                                                addTimeSlot,
                                                            }) => {
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();

        try {
            const data = e.dataTransfer.getData("text/plain");
            const droppedTask = JSON.parse(data);
            const sourceDay = e.dataTransfer.getData("sourceDay");

            if (!droppedTask || !sourceDay) {
                console.error("Missing task or source day data.");
                return;
            }

            if (sourceDay !== dayName) {
                removeTimeSlot(sourceDay, droppedTask);
                addTimeSlot(dayName, droppedTask);
            }
        } catch (error) {
            console.error("Error handling drop event:", error);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    return (
        <div
            className="flex flex-col flex-1 text-sm font-medium leading-9 text-neutral-400"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <div
                className="flex flex-col overflow-hidden px-2 pt-5 w-full border-black border-opacity-0 border-t-[3px] pb-[766px] max-md:pb-24">
                {tasks.map((slot, index) => (
                    <TimeSlot
                        key={index}
                        time={slot.time}
                        initials={slot.initials}
                        isSelected={false}
                        onClick={() => console.log("TimeSlot clicked")}
                        onDragStart={(e) => {
                            e.dataTransfer.setData("text/plain", JSON.stringify(slot));
                            e.dataTransfer.setData("sourceDay", dayName);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
