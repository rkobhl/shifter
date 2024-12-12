import * as React from "react";
import { TaskContainer } from "@/app/components/task/TaskContainer";
import { DayCellProps } from "@/app/model/types";


export const DayCell: React.FC<DayCellProps> = ({dayName, dayNumber, tasks, removeTimeSlot, addTimeSlot}) => {
    return (
        <div className="flex flex-col flex-1 items-start py-2.5 pr-12 pl-4 bg-zinc-900 max-md:pr-5">
            <div className="text-xs font-bold uppercase text-neutral-400">{dayName}</div>
            <div className="mt-1.5 text-xl leading-snug text-stone-100">{dayNumber}</div>
            <TaskContainer
                dayName={dayName}
                tasks={tasks}
                removeTimeSlot={removeTimeSlot}
                addTimeSlot={addTimeSlot}
            />
        </div>
    );
};
