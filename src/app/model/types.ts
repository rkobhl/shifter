export interface IconButtonProps {
    src: string;
    alt: string;
}

export interface StatusButtonProps {
    label: string;
}

export interface ActionButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export interface NavButtonProps {
    text: string;
    hasBorder?: boolean;
}

export interface TaskBarIconProps extends NavButtonProps {
    iconSrc?: string;
    iconPosition?: 'left' | 'right';
}

export interface TaskInputProps {
    onAddTask?: () => void;
    time: string;
    initials: string;
    isSelected: boolean;
}

export interface TimeSlotProps {
    time: string;
    initials: string;
    isSelected?: boolean;
}

export interface DayCellProps {
    dayName: TaskDays;
    dayNumber: number;
    tasks: Task[];
    removeTimeSlot: (day: TaskDays, timeSlot: Task) => void;
    addTimeSlot: (day: TaskDays, timeSlot: Task) => void;
}

