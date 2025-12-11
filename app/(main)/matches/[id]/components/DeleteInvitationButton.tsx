'use client'

import { deleteinvitationFromMatch } from "@/actions/matches";
import { useRouter } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";

interface DeleteInvitationButtonProps {
    matchId: number,
    playerId: number,
}

const DeleteInvitationButton = ({ matchId, playerId }: DeleteInvitationButtonProps) => {

    const router = useRouter()

    const handleDeleteBtn = async () => {
        const response = await deleteinvitationFromMatch(matchId, playerId)
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

export default DeleteInvitationButton;