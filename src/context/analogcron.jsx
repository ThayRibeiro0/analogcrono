import { useReducer } from "react";
import { createContext } from "react";

const PAGES = ["First", "Last"]

const initialPages = {
    numberPages: PAGES[0]
}

const TimersReducer = (pages, action) => {
    console.log(pages, action);

    switch(action.type){
        case "CHANGE_PAGES":
            return {
            numberPages: PAGES[1],
            };

        default:
            return pages;
    }
}

export const TimersContext =  createContext()

export const TimersProvider = ({ children }) => {
    const value = useReducer(TimersReducer, initialPages);

    return <TimersContext.Provider value={value}>{children}</TimersContext.Provider>;
};