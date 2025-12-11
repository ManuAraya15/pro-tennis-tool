"use client"

import { updateMatch } from "@/actions/matches";
import { Match } from "@/generated/prisma";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

interface MatchFormProps {
    match: Match
}

const MatchForm = ({ match }: MatchFormProps) => {

    const [state, formAction] = useActionState(updateMatch, null)
    const router = useRouter()

    const { title, date, id: matchId, location, result } = match


    useEffect(() => {
        if (state && state.success) {
            router.refresh()
        }
    }, [state])

    return (

        <form action={formAction} className="col-span-2">
            {state?.success == false && state?.message &&
                <div className='fixed left-0 bottom-0 w-full p-5'>
                    <div className='bg-error-container border border-error text-error rounded-lg p-3 w-max mx-auto'>
                        {state?.message}
                    </div>
                </div>
            }
            {state?.success && state?.message &&
                <div className='fixed left-0 bottom-0 w-full p-5'>
                    <div className='bg-green-200 border border-green-600 text-green-600 rounded-lg p-3 w-max mx-auto'>
                        {state?.message}
                    </div>
                </div>
            }

            <h1 className="px-2 text-lg font-bold">{title}</h1>
            <input type="hidden" name="matchId" id="matchId" value={matchId} />
            <div className="rounded-xl bg-surface-container shadow p-4 grid grid-cols-3 gap-4 items-center justify-center">
                {/* Titulo */}
                <label htmlFor="title" >Titulo</label>
                <input defaultValue={title} type="text" name="title" id="title" className="col-span-2 p-1 border rounded-lg" />
                {/* Lugar */}
                <label htmlFor="location" >Lugar</label>
                <input defaultValue={location} type="text" name="location" id="location" className="col-span-2 p-1 border rounded-lg" />
                {/* Fecha */}
                <label htmlFor="date" >Fecha y hora</label>
                <input defaultValue={new Date(date.getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0, 16)} type="datetime-local" name="date" id="date" className="col-span-2 p-1 border rounded-lg" />
                {/* Resultado */}
                <label htmlFor="result">Resultado</label>
                <input defaultValue={result ?? ""} type="text" name="result" id="result" className="col-span-2 p-1 border rounded-lg" />
            </div>
            <div className=" flex justify-center gap-4 p-4">
                <button type="submit" className="rounded-lg bg-[#61ac67] p-2 px-6 text-on-primary">Guardar</button>
            </div>
        </form>
    );
};

export default MatchForm;