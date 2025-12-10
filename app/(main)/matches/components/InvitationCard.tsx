"use client"

import { acceptInvitation, declineInvitation } from "@/actions/matches";
import { Match } from "@/generated/prisma";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

interface InvitationCardProps {
    match: Match
}

const InvitationCard = ({ match }: InvitationCardProps) => {
    const router = useRouter();

    const handleAccept = async () => {
        const response = await acceptInvitation(match.id)
        const { success } = response
        if (success){
            router.refresh()
        }
    }
    const handleDecline = async () => {
        const response = await declineInvitation(match.id)
        const { success } = response
        if (success){
            router.refresh()
        }
    }

    const { title, adminId, date, createdAt, id, location } = match
    return (
        <div className="rounded-2xl shadow bg-surface-container flex gap-4 justify-between items-center p-4">
            <div className="flex items-center gap-4">
                <FaUserCircle className="text-7xl" />
                <div className="text-sm">
                    <p className="font-bold line-clamp-1">{title}</p>
                    <p className="line-clamp-1">Fecha: {new Date(date).toLocaleString()}</p>
                    <p className="line-clamp-2">Ubicacion: {location}</p>
                </div>
            </div>
            <div className="flex max-sm:flex-col gap-2 text-xs">
                <button onClick={handleAccept} className="bg-tertiary text-on-tertiary p-2 rounded">Aceptar</button>
                <button onClick={handleDecline} className="bg-error text-on-error p-2 rounded">Rechazar</button>
            </div>
        </div>
    );
};

export default InvitationCard;