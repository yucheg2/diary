import React, { useState, useContext } from "react";
import { LayoutProps } from "../layout/mainLayot";

const TodoosContext = React.createContext({});

interface TodooInterface {
    content: string;
    cheked: boolean;
}

interface TodoosInterface {
    [date: string]: TodooInterface[];
}

const TodoosProvider = ({ children }: LayoutProps) => {
    const [todoos, setTodoos] = useState<TodoosInterface | {}>({});
    return (
        <TodoosContext.Provider value={todoos}>
            {children}
        </TodoosContext.Provider>
    );
};

export const useTodoos = () => useContext(TodoosContext);

export default TodoosProvider;
