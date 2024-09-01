import { useContext,createContext } from "react";

export const text = createContext({
    name : ""
    gender : ""
    setname : () => {}
    setgen : () => {}
})



export const textprovider = text.Provider

export const useFun = () => {
    return useContext(text)
}