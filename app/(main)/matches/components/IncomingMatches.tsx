import { FaUserCircle } from "react-icons/fa";
import NewMatchButtom from "./NewMatchButtom";

interface IncomingMatchesProps {

}

const IncomingMatches = (props: IncomingMatchesProps) => {

    return (
        <div className="bg-geen-500 flex flex-col gap-4">
            <div className="flex justify-between items-center px-2">
                <h2 className="text-lg">Proximos partidos</h2>
                <NewMatchButtom />
            </div>
            <div className="rounded-2xl shadow bg-surface-container flex gap-4 justify-between items-center p-4">
                <div className="flex items-center gap-4">
                    <FaUserCircle className="text-7xl" />
                    <div className="text-sm">
                        <p className="font-bold line-clamp-1">Andres Rodriguez / Singles</p>
                        <p className="line-clamp-1">Fecha: 20/06/2024 15:00</p>
                        <p className="line-clamp-2">Ubicacion: Club de tenis La Plata</p>
                    </div>
                </div>
                <span className="text-xs underline text-center text-tertiary">
                    Ver detalles
                </span>
            </div>
            <div className="rounded-2xl shadow bg-surface-container flex gap-4 justify-between items-center p-4">
                <div className="flex items-center gap-4">
                    <FaUserCircle className="text-7xl" />
                    <div className="text-sm">
                        <p className="font-bold line-clamp-1">Andres Rodriguez / Singles</p>
                        <p className="line-clamp-1">Fecha: 20/06/2024 15:00</p>
                        <p className="line-clamp-2">Ubicacion: Club de tenis La Plata</p>
                    </div>
                </div>
                <span className="text-xs underline text-center text-tertiary">
                    Ver detalles
                </span>
            </div>
            <div className="rounded-2xl shadow bg-surface-container flex gap-4 justify-between items-center p-4">
                <div className="flex items-center gap-4">
                    <FaUserCircle className="text-7xl" />
                    <div className="text-sm">
                        <p className="font-bold line-clamp-1">Andres Rodriguez / Singles</p>
                        <p className="line-clamp-1">Fecha: 20/06/2024 15:00</p>
                        <p className="line-clamp-2">Ubicacion: Club de tenis La Plata</p>
                    </div>
                </div>
                <span className="text-xs underline text-center text-tertiary">
                    Ver detalles
                </span>
            </div>
        </div>
    );
};

export default IncomingMatches;