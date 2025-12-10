import { getLastResults } from "@/actions/matches";
import Link from "next/link";

interface PreviousMatchesProps {

}

const PreviousMatches = async (props: PreviousMatchesProps) => {

    const response = await getLastResults()

    const { message, success, data: matches } = response

    return (
        <div className="bg-geen-500 flex flex-col gap-4">
            <h2 className="text-lg px-2">Ultimos resultados</h2>
            <div className="grid grid-cols-2 gap-4">
                {matches && matches.length > 0 ?
                    matches.map((match) => {
                        const { title, adminId, date, createdAt, id, location, result } = match
                        return <div key={id} className="rounded-2xl shadow bg-surface-container p-4 text-xs flex flex-col gap-1">
                            <p className="line-clamp-1 font-light">{new Date(date).toLocaleDateString()}</p>
                            <p className="font-bold line-clamp-2">{title}</p>
                            <p className="line-clamp-2">Ubicacion: {location}</p>
                            <p className="line-clamp-2">Resultado: {result}</p>
                            <Link href={"/matches/" + id} className="text-xs underline text-center text-tertiary">
                                Ver mas
                            </Link>
                        </div>
                    }
                    ) :
                    <p className="text-center text-sm text-gray-500">No se han encontrado invitaciones</p>

                }
            </div>
        </div>
    );
};

export default PreviousMatches;