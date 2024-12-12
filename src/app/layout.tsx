"use client";
import React from "react";
import "./globals.css";
import { NavigationBar } from "@/app/components/navigation/NavigationBar";
import { TaskBar } from "@/app/components/taskbar/TaskBar";
import { Calendar } from "@/app/components/calendar/Calendar";
import { TaskContainer } from "@/app/components/task/TaskContainer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <DndProvider backend={HTML5Backend}>
            <html lang="en">
                <body className="bg-zinc-800 text-stone-100">
                    <header>
                        <NavigationBar/>
                        <TaskBar/>
                        <Calendar/>
                        <TaskContainer
                            dayName={""}
                            removeTimeSlot={function (
                                day: string,
                                timeSlot: { time: string; initials: string }
                            ): void {
                                throw new Error("Function not implemented.");
                            }}
                            addTimeSlot={function (
                                day: string,
                                timeSlot: { time: string; initials: string }
                            ): void {
                                throw new Error("Function not implemented.");
                            }}
                        />
                    </header>
                    <main className="container mx-auto p-4">{children}</main>
                </body>
            </html>
        </DndProvider>
    );
};

export default RootLayout;
