"use client"
import { createContext, useContext, useState,} from 'react'

// export const BackGroundContext = createContext()

const [value, setValue] = useState(0);
const [isOpen, setIsOpen] = useState(false);

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

nextItem();
console.log(value);

