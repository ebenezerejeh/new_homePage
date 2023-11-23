"use client"
import { createContext, useContext, useEffect, useState,} from 'react'
import { BackGroundContextProps } from '@/Types/MyTypes'
import { BackGroundContextTypes } from '@/Types/MyTypes'


// export const BackGroundContext = createContext()

export const BackGroundContext= createContext<BackGroundContextTypes | null>(null)




export const BackGroundContextProvider = ({children}: BackGroundContextProps)=>{



const [value, setValue] = useState(0);
const [isOpen, setIsOpen] = useState(false);


// useEffect(()=>{
//     if (value > 2){
//         setValue(0)
//     }
    
//     console.log(value)
// },[value]);

useEffect(()=>{
    let slider = setInterval(()=>{
            if(value===0){
                setValue(1)
            }
            if(value===1){
                setValue(2)
            }
            if(value===2){
                setValue(0)
            }
        ;
    }, 5000);
    return () => clearInterval(slider);


},[value])








const checkValue=(num:number)=>{
    if(num < 0){
    return 2;
    }
    if(num > 2){
    return 0;
    }
    return num;
}

const nextItem = ()=>{
     setValue((value)=>{
        let newValue = value + 1;
        return checkValue(newValue);
    })
    
}

const prevItem = ()=>{
    setValue((value)=>{
        let newValue = value - 1;
        return checkValue(newValue);
    })

}

const openSideBar = ()=>{
    setIsOpen(!isOpen);
}

    return( 
        <BackGroundContext.Provider value={{
            value,
            setValue,
            isOpen,
            setIsOpen,
            checkValue,
            nextItem,
            prevItem,
            openSideBar
     
        }}>
            {children}
        </BackGroundContext.Provider>


    )
 
    


}

export const useGlobalContext = ()=>{
    const context = useContext(BackGroundContext);
    if (!context){
        throw new Error(
            "useGlobalContext must be within a ContextProvider"
        );
    }
    return context;
}










