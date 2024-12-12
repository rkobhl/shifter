type TaskDays = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

interface Task {
    time: string;
    initials: string;
}

type TasksState = Record<TaskDays, Task[]>;
