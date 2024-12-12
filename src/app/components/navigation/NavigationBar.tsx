import * as React from 'react';
import { IconButton } from './IconButton';
import { StatusButton } from './StatusButton';
import { ActionButton } from './ActionButton';

export const NavigationBar: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-1 items-center ml-6 max-md:max-w-full">
            <IconButton
                src="NavIcon.svg"
                alt="Navigation icon"/>

            <div
                className="overflow-hidden self-stretch p-1.5 my-auto text-xl font-medium leading-none whitespace-nowrap rounded-md border border-solid bg-zinc-900 border-black border-opacity-0 text-stone-100 max-md:pr-5">
                Shyft
            </div>

            <div className="flex self-stretch my-auto">
                <IconButton
                    src="DropDownIcon.svg"
                    alt="Secondary navigation icon"/>
                <IconButton
                    src="Star.svg"
                    alt="Tertiary navigation icon"/>
            </div>

            <div className="flex flex-wrap gap-10 self-stretch max-md:max-w-full">
                <StatusButton label="Set status"/>

                <div className="flex gap-8 py-2.5 pl-2.5 text-xs whitespace-nowrap bg-zinc-900">
                    <div
                        className="overflow-hidden self-start px-1.5 w-6 h-6 leading-loose bg-teal-400 rounded-xl shadow-sm text-zinc-900">
                        Re
                    </div>
                    <div className="flex gap-2 leading-7">
                        <ActionButton variant="primary">Share</ActionButton>
                        <div className="flex flex-col items-start px-2.5 text-stone-100">
                            <ActionButton variant="secondary">Customize</ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};