"use client"

import { IoMdAdd } from "react-icons/io";
import NewMatchFormModal from "./NewMatchFormModal";
import { useState } from "react";

interface NewMatchButtomProps {
    
}

const NewMatchButtom = (props: NewMatchButtomProps) => {

    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
            <button onClick={()=> setIsOpen(true)} className="underline  text-tertiary rounded-xl flex items-center gap-1">
                <IoMdAdd className="text-lg"/> Nuevo partido
            </button>
            <NewMatchFormModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default NewMatchButtom;