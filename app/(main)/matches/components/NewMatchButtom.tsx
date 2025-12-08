import { IoMdAdd } from "react-icons/io";

interface NewMatchButtomProps {
    
}

const NewMatchButtom = (props: NewMatchButtomProps) => {
    
    return (
        <button className="underline  text-tertiary rounded-xl flex items-center gap-1">
            <IoMdAdd className="text-lg"/> Nuevo partido
        </button>
    );
};

export default NewMatchButtom;