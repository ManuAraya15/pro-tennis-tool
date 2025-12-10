import { getMatchInvitations } from "@/actions/matches";
import { FaUserCircle } from "react-icons/fa";
import InvitationCard from "./InvitationCard";

interface MatchInvitationsProps {

}

const MatchInvitations = async (props: MatchInvitationsProps) => {


    const response = await getMatchInvitations()

    const { message, success, data: matches } = response

    return (
        <div className="bg-geen-500 flex flex-col gap-4">
            <h2 className="text-lg px-2">Invitaciones</h2>

            {matches && matches.length > 0 ?
                matches.map((match) => {
                    const { title, adminId, date, createdAt, id, location } = match
                    return <InvitationCard key={id} match={match}/>
                }
                ) :
                <p className="text-center text-sm text-gray-500">No se han encontrado invitaciones</p>

            }
        </div>
    );
};

export default MatchInvitations;