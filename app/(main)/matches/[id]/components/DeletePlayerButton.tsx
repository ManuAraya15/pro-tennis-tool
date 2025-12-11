'use client'

import { deletePlayerFromMatch } from "@/actions/matches";
import { useRouter } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";

interface DeletePlayerButtonProps {
    matchId: number,
    playerId: number,
}

const DeletePlayerButton = ({ matchId, playerId }: DeletePlayerButtonProps) => {

    const router = useRouter()

    const handleDeleteBtn = async () => {
        const response = await deletePlayerFromMatch(matchId, playerId)
        if (response.success) {
            router.refresh()
        }
    }

    return (
        <button onClick={handleDeleteBtn} >
            <MdDeleteForever className="text-error text-3xl" />
        </button>
    );
};

export default DeletePlayerButton;