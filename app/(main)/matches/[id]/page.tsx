import { getMatch, getOptionUsers, OptionUsers } from "@/actions/matches";
import { notFound } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import InviteButton from "./components/InviteButton";
import { auth } from "@/auth";
import MatchForm from "./components/MatchDataForm";
import DeletePlayerButton from "./components/DeletePlayerButton";
import DeleteInvitationButton from "./components/DeleteInvitationButton";
import FavoriteBtn from "./components/FavoriteBtn";

interface DetailMatchPageProps {
    params: {
        id: string
    }
}

const DetailMatchPage = async ({ params }: DetailMatchPageProps) => {
    const { id } = await params
    const response = await getMatch(id)
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) return <>Hubo un problema al cargar la session</>
    const options: OptionUsers[] = await getOptionUsers(userId)

    const { message, success, data: match } = response
    if (!match) return notFound()

    const { title, adminId, date, createdAt, id: matchId, location, result, admin, players, usersInvited } = match


    return (
        <div className=" p-4 flex flex-col gap-2 md:gap-4 md:grid grid-cols-3">
            <MatchForm match={match} />
            <div >
                <h2 className="px-2">Creador por</h2>
                <div className="rounded-2xl shadow bg-surface-container flex justify-center items-center gap-4 p-4">
                    <FaUserCircle className="text-3xl" />
                    <div className="text-sm">
                        <p className="font-bold line-clamp-1">{admin.name ?? admin.email}</p>
                    </div>
                </div>

            </div>
            <div className="col-span-2 flex flex-col gap-3">

                <div className="px-2 flex justify-between items-center ">
                    <h2>Participantes ({players.length}/4)</h2>
                    <InviteButton options={options} />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {players.length > 0 ?
                        players.map((player) => {
                            const { name, email, id, favoritedBy } = player
                            return <div key={id} className="rounded-2xl shadow bg-surface-container flex justify-between items-center gap-4 p-4">
                                <div className="flex justify-start items-center gap-4">
                                    <FaUserCircle className="text-3xl" />
                                    <div className="text-sm">
                                        <p className="font-bold line-clamp-1">{name ?? email}</p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <FavoriteBtn playerId={id} favorites={favoritedBy} />
                                    <DeletePlayerButton matchId={matchId} playerId={id} />
                                </div>
                            </div>
                        }) :
                        <p className="text-center text-sm">No hay participantes aun</p>
                    }
                </div>
            </div>
            <div className="col-span-2 flex flex-col gap-3">

                <h2 className="px-2">Invitados ({usersInvited.length})</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {usersInvited.length > 0 ?
                        usersInvited.map((player) => {
                            const { name, email, id, favoritedBy } = player
                            return <div key={id} className="rounded-2xl shadow bg-surface-container flex justify-between items-center gap-4 p-4">
                                <div className="flex justify-start items-center gap-4">
                                    <FaUserCircle className="text-3xl" />
                                    <div className="text-sm">
                                        <p className="font-bold line-clamp-1">{name ?? email}</p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <FavoriteBtn playerId={id} favorites={favoritedBy} />
                                    <DeleteInvitationButton matchId={matchId} playerId={id} />
                                </div>
                            </div>
                        }) :
                        <p className="text-center text-sm">No hay invitados aun</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailMatchPage;