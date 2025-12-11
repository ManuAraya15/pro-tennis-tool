'use client'

import { addFavoritePlayer, deleteFavoritePlayer } from "@/actions/favorites";
import { deletePlayerFromMatch } from "@/actions/matches";
import { User } from "@/generated/prisma";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

interface FavoriteBtnProps {
    favorites: User[]
    playerId: number
}

const FavoriteBtn = ({ favorites, playerId }: FavoriteBtnProps) => {

    const router = useRouter()
    const { data: session, status } = useSession();
    const [ isFavorite, setIsFavorite ] = useState<boolean | null>(null)
    const [ userId, setUserId ] = useState<number | null>(null)
    
    useEffect (() => {
        const userIdString = session?.user?.id
        console.log(userIdString)
        if (typeof userIdString === "string") {
            const userId = parseInt(userIdString)
            console.log(favorites)
            console.log(favorites.find((user)=> user.id == userId)? true: false)
            setIsFavorite(favorites.find((user)=> user.id == userId)? true: false )
        }
    }, [favorites, session])

    const handleFavoriteBtn = async () => {
        let response: ActionResponse<User>
        if (isFavorite) {
            console.log(playerId)
            response = await deleteFavoritePlayer(playerId)
            console.log(response)
        } else {
            console.log(playerId)
            response = await addFavoritePlayer(playerId)
            console.log(response)
        }
        if (response.success) {
            router.refresh()
        }
    }

    return (
        <button onClick={handleFavoriteBtn} >

            {isFavorite? 
                <FaStar  className="text-[#dae200]  text-2xl" />
                :
                <FaRegStar  className="text-[#dae200]  text-2xl" />
                
            }
        </button>
    );
};

export default FavoriteBtn;