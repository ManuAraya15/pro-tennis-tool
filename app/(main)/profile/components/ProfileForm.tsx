"use client"

import { updateProfileInfo } from "@/actions/profile";
import { User } from "@/generated/prisma";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";


interface ProfileFormProps {
    profile: User
}

const ProfileForm = ({ profile }: ProfileFormProps) => {

    const [state, formAction] = useActionState(updateProfileInfo, null)
    const router = useRouter()

    const { name, age, objectives, avilability, sex, email } = profile

    useEffect(()=> {
        if (state && state.success) {
            router.refresh()
        }
    }, [state])

    return (
        <form action={formAction} className="mx-auto max-w-xl p-4 gap-2 flex flex-col">
            <div className="rounded-xl bg-surface-container shadow p-7 flex flex-col justify-center items-center gap-3">
                <FaUserCircle className="text-9xl" />
                <p className="text-xl">{name ?? "No tiene nombre"}</p>
            </div>

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



            <h3 className="px-2">Datos personales</h3>
            <div className="rounded-xl bg-surface-container shadow p-7 grid grid-cols-4 gap-4">
                {/* Nombre */}
                <label htmlFor="name">Nombre</label>
                <input defaultValue={name?? ""} className=" border col-span-3 rounded-lg border-on-surface-variant px-2" type="text" name="name" id="name" />
                {/* Edad */}
                <label htmlFor="age">Edad</label>
                <input  defaultValue={age?? ""} className=" border col-span-3 rounded-lg border-on-surface-variant px-2" type="number" name="age" id="age" />
                {/* Sexo */}
                <label htmlFor="sex">Sexo</label>
                <select defaultValue={sex? sex: "M"} className=" border col-span-3 rounded-lg border-on-surface-variant px-2" name="sex" id="sex">
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                </select>
            </div>

            <h3 className="px-2">Objetivos</h3>
            <div className="rounded-xl bg-surface-container shadow p-7">
                {/* Motivo */}
                <textarea defaultValue={objectives?? ""} rows={3} name="objectives" id="objectives" className="w-full border rounded-lg border-on-surface-variant p-3" />
            </div>

            <h3 className="px-2">Disponibilidad horaria</h3>
            <div className="rounded-xl bg-surface-container shadow p-7">
                {/* Disponibilidad */}
                <textarea defaultValue={avilability?? ""} rows={3} name="avilability" id="avilability" className="w-full border rounded-lg border-on-surface-variant p-3" />
            </div>

            <div className="text-lg flex justify-center gap-4 p-4">
                <button type="submit" className="rounded-lg bg-[#61ac67] p-2 px-6 text-on-primary">Guardar</button>
            </div>
        </form>
    );
};

export default ProfileForm;