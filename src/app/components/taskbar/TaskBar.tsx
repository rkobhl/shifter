import * as React from 'react';
import { TaskBarIcon } from "@/app/components/taskbar/TaskBarIcon";
import { TaskBarButton } from "@/app/components/taskbar/TaskBarButton";


export const TaskBar: React.FC = () => {
    const navItems = ['Weeks', 'Filter', 'Options'];

    return (
        <div
            className="flex flex-wrap gap-5 justify-between px-6 py-4 w-full text-xs font-medium border-t border-b bg-zinc-900 border-zinc-700 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-2 text-stone-100">
                <TaskBarIcon
                    text="Add task"
                    iconSrc="DropDownIcon.svg"
                    hasBorder={true}
                />
                <div className="flex leading-7 whitespace-nowrap text-neutral-400">
                    <img
                        loading="lazy"
                        src="LeftArrow.svg"
                        alt=""
                        className="object-contain shrink-0 w-7 rounded-md aspect-square"
                    />
                    <div
                        className="overflow-hidden px-2.5 rounded-md border border-solid border-black border-opacity-0">
                        Today
                    </div>
                    <img
                        loading="lazy"
                        src="RightArrow.svg"
                        alt=""
                        className="object-contain shrink-0 w-7 rounded-md aspect-square"
                    />
                </div>
                <div className="my-auto">December 2024</div>
            </div>
            <div className="flex gap-2 leading-7 whitespace-nowrap text-neutral-400">
                {navItems.map((item, index) => (
                    <React.Fragment key={item}>
                        <TaskBarButton text={item}/>
                        {index < navItems.length - 1 && (
                            <div className="flex shrink-0 my-auto w-px h-5 bg-zinc-700"/>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};