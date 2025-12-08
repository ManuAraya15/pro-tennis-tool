import { FaUserCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

interface DetailMatchPageProps {

}

const DetailMatchPage = (props: DetailMatchPageProps) => {

    return (
        <div className=" p-4 flex flex-col gap-2 md:gap-4 md:grid grid-cols-3">
            <div className="col-span-2">
                <h1 className="px-2 text-lg font-bold">Partido de singles manana</h1>
                <div className="rounded-xl bg-surface-container shadow p-4 grid grid-cols-3 gap-4 items-center justify-center">
                    {/* Lugar */}
                    <p >Lugar</p>
                    <p className="col-span-2">Cancha Nro 3 en el club de Tenis Sevilla</p>
                    {/* Fecha */}
                    <p >Fecha</p>
                    <p className="col-span-2" >20/12/2025</p>
                    {/* Hora */}
                    <p >Hora</p>
                    <p className="col-span-2" >10:00 AM</p>
                    {/* Resultado */}
                    <p >Resultado</p>
                    <p className="col-span-2" >6-2 6-8</p>
                </div>
            </div>
            <div >
                <h2 className="px-2">Creador por</h2>
                <div className="rounded-2xl shadow bg-surface-container flex justify-center items-center gap-4 p-4">
                    <FaUserCircle className="text-3xl" />
                    <div className="text-sm">
                        <p className="font-bold line-clamp-1">Andres Rodriguez</p>
                    </div>
                </div>

            </div>
            <div className="col-span-2 flex flex-col gap-3">

                <div className="px-2 flex justify-between items-center ">
                    <h2>Participantes (3/4)</h2>
                    <button className="flex items-center gap-1 text-tertiary underline"><IoMdAdd className="text-lg" />Invitar</button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                    <div className="rounded-2xl shadow bg-surface-container flex justify-between items-center gap-4 p-4">
                        <div className="flex justify-start items-center gap-4">
                            <FaUserCircle className="text-3xl" />
                            <div className="text-sm">
                                <p className="font-bold line-clamp-1">Andres Rodriguez</p>
                            </div>
                        </div>
                        <button>
                            <MdDeleteForever className="text-error text-3xl" />
                        </button>
                    </div>
                    <div className="rounded-2xl shadow bg-surface-container flex justify-between items-center gap-4 p-4">
                        <div className="flex justify-start items-center gap-4">
                            <FaUserCircle className="text-3xl" />
                            <div className="text-sm">
                                <p className="font-bold line-clamp-1">Miguel Gonzalez</p>
                            </div>
                        </div>
                        <button>
                            <MdDeleteForever className="text-error text-3xl" />
                        </button>
                    </div>
                    <div className="rounded-2xl shadow bg-surface-container flex justify-between items-center gap-4 p-4">
                        <div className="flex justify-start items-center gap-4">
                            <FaUserCircle className="text-3xl" />
                            <div className="text-sm">
                                <p className="font-bold line-clamp-1">Pedro Perez</p>
                            </div>
                        </div>
                        <button>
                            <MdDeleteForever className="text-error text-3xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailMatchPage;