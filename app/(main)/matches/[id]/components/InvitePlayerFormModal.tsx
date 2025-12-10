"use client"

import { invitePlayer, OptionUsers } from "@/actions/matches";
import { useParams } from "next/navigation";
import { useState, useMemo, useActionState, useEffect } from "react";

interface InvitePlayerFormModalProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    options: OptionUsers[]
}

const InvitePlayerFormModal = ({ isOpen, setIsOpen, options }: InvitePlayerFormModalProps) => {
    const [state, formAction] = useActionState(invitePlayer, null);
    const { id: matchId } = useParams() 

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<OptionUsers | null>(null);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    // useEffect(() => {
    //     if (state && state.success) {
    //         setIsOpen(false);
    //     }
    // }, [state, setIsOpen]);

    const filteredOptions = useMemo(() => {
        if (!searchTerm) return options;

        return options.filter((option: OptionUsers) =>
            option.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, options]);

    const handleInputChange = (event: any) => {
        setSearchTerm(event.target.value);
        setIsOptionsOpen(true); 
        setSelectedItem(null); 
    };

    const handleSelectItem = (item: OptionUsers) => {
        setSelectedItem(item);
        setSearchTerm(item.email); 
        setIsOptionsOpen(false); 
    };

    const handleInputFocus = () => {
        setIsOptionsOpen(true);
    };

    const handleInputBlur = () => {
        setTimeout(() => {
            setIsOptionsOpen(false);
            if (!selectedItem && searchTerm !== '') {
                setSearchTerm(selectedItem || '');
            }
        }, 150);
    };

    const displayValue = selectedItem?.email || searchTerm;

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
                    <h2 className="text-xl font-bold mb-4">Invitar Amigo</h2>
                    <input type="hidden" name="matchId" value={matchId} />
                    {selectedItem && selectedItem.id &&
                        <input type="hidden" name="playerId" value={selectedItem.id} />
                    }
                    <div className="relative">
                        <input
                            type="text"
                            value={displayValue}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            placeholder="Busca una fruta..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                        />

                        {selectedItem && (
                            <p className="mt-2 text-sm text-green-600">
                                Seleccionado: **{selectedItem.email}**
                            </p>
                        )}

                        {isOptionsOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                                {filteredOptions.length > 0 ? (
                                    <ul>
                                        {filteredOptions.map((item, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleSelectItem(item)}
                                                className="px-4 py-2 cursor-pointer hover:bg-blue-100 transition duration-100 text-gray-800"
                                            >
                                                {item.email}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="px-4 py-3 text-gray-500 italic">
                                        No se encontraron resultados.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    {state && !state.success && (
                        <p className="text-red-500 text-sm">{state.message}</p>
                    )}
                    {state && state.success && (
                        <p className="text-green-500 text-sm">{state.message}</p>
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

export default InvitePlayerFormModal;