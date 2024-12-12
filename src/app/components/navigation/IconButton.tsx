import * as React from 'react';
import { IconButtonProps } from "@/app/model/types";


export const IconButton: React.FC<IconButtonProps> = ({src, alt}) => {
    return (
        <button
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            tabIndex={0}
        >
            <img
                loading="lazy"
                src={src}
                alt={alt}
                className="object-contain shrink-0 w-7 rounded-md aspect-square"
            />
        </button>
    );
};