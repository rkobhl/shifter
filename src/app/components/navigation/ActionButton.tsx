import * as React from 'react';
import { ActionButtonProps } from "@/app/model/types";


export const ActionButton: React.FC<ActionButtonProps> = ({
                                                              children,
                                                              variant = 'secondary',
                                                              className = ''
                                                          }) => {
    const baseStyles = "overflow-hidden px-6 rounded-md border border-solid focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
    const variantStyles = {
        primary: "text-white bg-blue-500 border-blue-500",
        secondary: "text-stone-100 border-zinc-600"
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            tabIndex={0}
        >
            {children}
        </button>
    );
};