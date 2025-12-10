import { FaUserCircle } from "react-icons/fa";
import NewMatchButtom from "./NewMatchButtom";
import { getMatches } from "@/actions/matches";
import Link from "next/link";

interface IncomingMatchesProps {

}

const IncomingMatches = async (props: IncomingMatchesProps) => {

    const response = await getMatches()

    const { message, success, data: matches } = response

    return (
        <div className="bg-geen-500 flex flex-col gap-4">
            <div className="flex justify-between items-center px-2">
                <h2 className="text-lg">Proximos partidos</h2>
                <NewMatchButtom />
            </div>
            {matches && matches.length > 0 ?
                matches.map((match) =>{
                    const { title, adminId, date, createdAt, id, location } = match
                    return <div key={id} className="rounded-2xl shadow bg-surface-container flex gap-4 justify-between items-center p-4">
                        <div className="flex items-center gap-4">
                            <FaUserCircle className="text-7xl" />
                            <div className="text-sm">
                                <p className="font-bold line-clamp-1">{title}</p>
                                <p className="line-clamp-1">Fecha: {new Date(date).toLocaleString()}</p>
                                <p className="line-clamp-2">Ubicacion: {location}</p>
                            </div>
                        </div>
                        <Link href={"/matches/" + id} className="text-xs underline text-center text-tertiary">
                            Ver detalles
                        </Link>
                    </div>
                    }
                ): 
                <p className="text-center text-sm text-gray-500">No se han encontrado partidos</p>

            }
        </div>
    );
};

export default IncomingMatches;