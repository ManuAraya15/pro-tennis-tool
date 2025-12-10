"use client"

import { addMatch } from "@/actions/matches";
import { useActionState, useEffect } from "react";

interface NewMatchFormModalProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

const NewMatchFormModal = ({isOpen, setIsOpen}: NewMatchFormModalProps) => {
    const [state, formAction] = useActionState(addMatch, null);

    useEffect(() => {
        if (state && state.success) {
            setIsOpen(false);
        }
    }, [state, setIsOpen]);

    return (
        <div 
            onClick={() => setIsOpen(false)} 
            className={(isOpen ? " fixed " : " hidden ") + " top-0 left-0 w-screen h-screen bg-[#00000078] flex justify-center items-center z-50"}
        >
            <div 
                onClick={(e) => e.stopPropagation()} 
                className="bg-surface-container p-6 rounded-2xl max-w-lg w-full"
            >
                <form action={formAction} className="space-y-4">
                    <h2 className="text-xl font-bold mb-4">Crear un partido</h2>
                    
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Ej: Partido de fútbol en el parque"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha y Hora</label>
                        <input
                            type="datetime-local"
                            id="date"
                            name="date"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Ubicación</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Ej: Cancha Principal, Parque Central"
                        />
                    </div>
                    
                    {state && !state.success && (
                        <p className="text-red-500 text-sm">{state.message}</p>
                    )}

                    <button 
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Agregar Partido
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewMatchFormModal;