import * as React from 'react';
import { TaskBarIconProps } from "@/app/model/types";


export const TaskBarIcon: React.FC<TaskBarIconProps> = ({
                                                            text,
                                                            iconSrc,
                                                            iconPosition = 'right',
                                                            hasBorder = false
                                                        }) => {
    const borderClass = hasBorder? 'border-zinc-600' : 'border-black border-opacity-0';

    return (
        <div className="flex leading-7">
            {iconPosition === 'left' && iconSrc && (
                <img
                    loading="lazy"
                    src={iconSrc}
                    alt=""
                    className="object-contain shrink-0 w-7 rounded-md aspect-square"
                />
            )}
            <div
                role="button"
                tabIndex={0}
                className={`overflow-hidden px-6 rounded-md border border-solid ${borderClass} max-md:pl-5`}
            >
                {text}
            </div>
            {iconPosition === 'right' && iconSrc && (
                <img
                    loading="lazy"
                    src={iconSrc}
                    alt=""
                    className="object-contain shrink-0 rounded-none aspect-[0.79] w-[22px]"
                />
            )}
        </div>
    );
};