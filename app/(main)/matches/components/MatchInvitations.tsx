import { FaUserCircle } from "react-icons/fa";

interface MatchInvitationsProps {

}

const MatchInvitations = (props: MatchInvitationsProps) => {

    return (
        <div className="bg-geen-500 flex flex-col gap-4">
            <h2 className="text-lg px-2">Invitaciones</h2>
            <div className="rounded-2xl shadow bg-surface-container flex gap-4 justify-between items-center p-4">
                <div className="flex items-center gap-4">
                    <FaUserCircle className="text-7xl" />
                    <div className="text-sm">
                        <p className="font-bold line-clamp-1">Andres Rodriguez / Singles</p>
                        <p className="line-clamp-1">Fecha: 20/06/2024 15:00</p>
                        <p className="line-clamp-2">Ubicacion: Club de tenis La Plata</p>
                    </div>
                </div>
                <div className="flex max-sm:flex-col gap-2 text-xs">
                    <button className="bg-tertiary text-on-tertiary p-2 rounded">Aceptar</button>
                    <button className="bg-error text-on-error p-2 rounded">Rechazar</button>
                </div>
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
                <div className="flex max-sm:flex-col gap-2 text-xs">
                    <button className="bg-tertiary text-on-tertiary p-2 rounded">Aceptar</button>
                    <button className="bg-error text-on-error p-2 rounded">Rechazar</button>
                </div>
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
                <div className="flex max-sm:flex-col gap-2 text-xs">
                    <button className="bg-tertiary text-on-tertiary p-2 rounded">Aceptar</button>
                    <button className="bg-error text-on-error p-2 rounded">Rechazar</button>
                </div>
            </div>
        </div>
    );
};

export default MatchInvitations;