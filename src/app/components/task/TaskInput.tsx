import * as React from "react";
import { TaskInputProps } from "@/app/model/types";


export const TaskInput: React.FC<TaskInputProps> = ({onAddTask}) => {
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={onAddTask}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onAddTask?.();
                }
            }}
            className="flex overflow-hidden gap-1 px-11 mb-0 rounded-md border border-solid border-black border-opacity-0 max-md:px-5 max-md:mb-2.5"
        >
            <img
                loading="lazy"
                src="Add.svg"
                alt=""
                className="object-contain shrink-0 my-auto w-3 aspect-square"
            />
            <div>Add task</div>
        </div>
    );
};