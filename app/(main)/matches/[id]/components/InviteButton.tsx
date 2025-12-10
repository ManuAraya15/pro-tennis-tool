"use client"

import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import InvitePlayerFormModal from "./InvitePlayerFormModal";
import { OptionUsers } from "@/actions/matches";

interface InviteButtonProps {
    options: OptionUsers[]
}

const InviteButton = (props: InviteButtonProps) => {



    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <InvitePlayerFormModal isOpen={isOpen} setIsOpen={setIsOpen} options={props.options}/>
            <button onClick={()=> setIsOpen(true)} className="flex items-center gap-1 text-tertiary underline"><IoMdAdd className="text-lg" />Invitar</button>
        </>
    );
};

export default InviteButton;