export type dataInfo = {
    id:number;
    name:string;
    header:string;
    body:string
}


export type BackGroundContextProps = {
    children : React.ReactNode;
};

export type BackGroundContextTypes = {
    value : number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    checkValue: (num:number)=> number;
    nextItem: ()=> void;
    prevItem: ()=> void;
    openSideBar: ()=> void;
    item?: number;


}