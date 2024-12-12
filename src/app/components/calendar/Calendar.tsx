"use client";
import React, { useState } from "react";
import { DayCell } from "./DayCell";

export const Calendar: React.FC = () => {
    const [tasks, setTasks] = useState<TasksState>({
        Sun: [],
        Mon: [{time: "8:00am-9:30am", initials: "Re"}],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
    });

    const removeTimeSlot = (day: TaskDays, timeSlot: Task) => {
        setTasks((prev) => ({
            ...prev,
            [day]: prev[day].filter(
                (slot) => slot.time !== timeSlot.time || slot.initials !== timeSlot.initials
            ),
        }));
    };

    const addTimeSlot = (day: TaskDays, timeSlot: Task) => {
        setTasks((prev) => ({
            ...prev,
            [day]: [...prev[day], timeSlot],
        }));
    };

    return (
        <div className="grid grid-cols-7 gap-1">
            {Object.keys(tasks).map((day, index) => (
                <DayCell
                    key={index}
                    dayName={day as TaskDays}
                    dayNumber={index + 1}
                    tasks={tasks[day as TaskDays]}
                    removeTimeSlot={removeTimeSlot}
                    addTimeSlot={addTimeSlot}
                />
            ))}
        </div>
    );
};
