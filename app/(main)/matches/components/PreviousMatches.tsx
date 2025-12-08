import { FaUserCircle } from "react-icons/fa";

interface PreviousMatchesProps {

}

const PreviousMatches = (props: PreviousMatchesProps) => {

    return (
        <div className="bg-geen-500 flex flex-col gap-4">
            <h2 className="text-lg px-2">Ultimos resultados</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl shadow bg-surface-container p-4 text-xs flex flex-col gap-1">
                    <p className="line-clamp-1 font-light">20/06/2024</p>
                    <p className="font-bold line-clamp-2">Andres Rodriguez / Singles</p>
                    <p className="line-clamp-2">Ubicacion: Club de tenis La Plata</p>
                    <p className="line-clamp-2">Gano: 6-3 6-2</p>
                    <span className="text-xs underline text-center text-tertiary">
                        Ver mas
                    </span>
                </div>
                <div className="rounded-2xl shadow bg-surface-container p-4 text-xs flex flex-col gap-1">
                    <p className="line-clamp-1 font-light">20/06/2024</p>
                    <p className="font-bold line-clamp-2">Andres Rodriguez / Singles</p>
                    <p className="line-clamp-2">Ubicacion: Club de tenis La Plata</p>
                    <p className="line-clamp-2">Gano: 6-3 6-2</p>
                    <span className="text-xs underline text-center text-tertiary">
                        Ver mas
                    </span>
                </div>
                <div className="rounded-2xl shadow bg-surface-container p-4 text-xs flex flex-col gap-1">
                    <p className="line-clamp-1 font-light">20/06/2024</p>
                    <p className="font-bold line-clamp-2">Andres Rodriguez / Singles</p>
                    <p className="line-clamp-2">Ubicacion: Club de tenis La Plata</p>
                    <p className="line-clamp-2">Gano: 6-3 6-2</p>
                    <span className="text-xs underline text-center text-tertiary">
                        Ver mas
                    </span>
                </div>
                <div className="rounded-2xl shadow bg-surface-container p-4 text-xs flex flex-col gap-1">
                    <p className="line-clamp-1 font-light">20/06/2024</p>
                    <p className="font-bold line-clamp-2">Andres Rodriguez / Singles</p>
                    <p className="line-clamp-2">Ubicacion: Club de tenis La Plata</p>
                    <p className="line-clamp-2">Gano: 6-3 6-2</p>
                    <span className="text-xs underline text-center text-tertiary">
                        Ver mas
                    </span>
                </div>
                <div className="rounded-2xl shadow bg-surface-container p-4 text-xs flex flex-col gap-1">
                    <p className="line-clamp-1 font-light">20/06/2024</p>
                    <p className="font-bold line-clamp-2">Andres Rodriguez / Singles</p>
                    <p className="line-clamp-2">Ubicacion: Club de tenis La Plata</p>
                    <p className="line-clamp-2">Gano: 6-3 6-2</p>
                    <span className="text-xs underline text-center text-tertiary">
                        Ver mas
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PreviousMatches;