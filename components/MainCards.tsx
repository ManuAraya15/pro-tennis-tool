
import { GiTennisRacket, GiTrophyCup } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";

interface MainCardsProps {
    
}

const MainCards = (props: MainCardsProps) => {
    
    return (
        <div className="container mx-auto md:p-6 p-3">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                <div className="bg-surface-container text-primary flex flex-col justify-start items-center p-8 rounded-lg shadow text-center gap-5">
                    <GiTennisRacket className="text-7xl" />
                    <h3 className="text-lg">1. Encuentra y conecta</h3>
                    <p className="text-sm">Descubra otros entusiastas del tenis en el área, ver perfiles y conectarse con jugadores de nivel y habilidad similares</p>
                </div>
                <div className="bg-surface-container text-primary flex flex-col justify-start items-center p-8 rounded-lg shadow text-center gap-5">
                    <IoCalendarOutline   className="text-7xl" />
                    <h3 className="text-lg">2. Planificar e Invitar</h3>
                    <p className="text-sm">Crea fácilmente nuevos eventos de partidos, especifica la fecha, hora y ubicación, y envía invitaciones directamente a tus contactos.</p>
                </div>
                <div className="bg-surface-container text-primary flex flex-col justify-start items-center p-8 rounded-lg shadow text-center gap-5">
                    <GiTrophyCup  className="text-7xl" />
                    <h3 className="text-lg">3. Jugar y Rastrear</h3>
                    <p className="text-sm">¡Disfruta tu partido! Después, haz un seguimiento del registro de rendimiento y mantén un historial de todos tus juegos anteriores.</p>
                </div>
            </div>
        </div>
    );
};

export default MainCards;