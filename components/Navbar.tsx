"use client"

import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

import { BiSolidTennisBall } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import ProfileDropdown from "./ProfileDropdown";
import { signOut, useSession } from "next-auth/react";

interface NavbarProps {

}

const Navbar = (props: NavbarProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const { data: session, status } = useSession();

    return (
        <div className="md:container mx-auto md:p-6">
            <nav className="flex justify-between bg-primary text-on-primary md:px-10 px-3 py-3 md:rounded-2xl">
                <Link href={"/"} className="flex justify-center items-center gap-3 border-0 shadow-none">
                    <BiSolidTennisBall className="text-[#d7ed50] text-base md:text-2xl" />
                    <h3 className="text-sm md:text-xl font-bold">Pro Tennis Tool</h3>
                </Link>
                {status === "authenticated" ?
                    <ul className="hidden md:flex items-center gap-5">
                        <li >
                            <Link className="flex gap-2 items-center" href="/matches">
                                Mis partidos
                            </Link>
                        </li>
                        <li>
                            <ProfileDropdown />
                        </li>
                    </ul>
                    :
                    <ul className="hidden md:flex gap-2">
                        <li >
                            <Link href={"/login"} className=" cursor-pointer hover:bg-on-primary hover:text-primary  bg-secondary-container text-on-secondary-container px-2 py-1 rounded-xl">
                                Iniciar Sesion
                            </Link>
                        </li>
                        <li>
                            <Link href={"/register"} className="cursor-pointer hover:bg-secondary-container hover:text-on-secondary-container bg-on-primary text-primary px-2 py-1 rounded-3xl">
                                Registro
                            </Link>
                        </li>
                    </ul>
                }

                <div className="flex md:hidden">
                    <button
                        onClick={() =>
                            setIsOpen(true)
                        }
                        className="text-on-primary"
                    >
                        <IoMenu className="text-2xl" />
                    </button>
                </div>
                <div
                    className={`transition fixed h-screen top-0 left-0 bg-primary text-on-primary w-64 p-4 z-50  duration-300 ease-in md:hidden
                        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >

                    {/* Enlaces del Drawer */}
                    <nav className="flex flex-col space-y-2">
                        <Link className="flex gap-2 items-center" href="/">
                            <AiOutlineHome /> Inicio
                        </Link>
                        <div className="h-3"></div>
                        {status === "authenticated" ?
                            <>

                                <Link className="flex gap-2 items-center" href="/profile">
                                    <CgProfile /> Mi perfil
                                </Link>
                                <Link className="flex gap-2 items-center" href="/matches">
                                    <FaRegCalendarAlt /> Mis partidos
                                </Link>
                                <div className="h-3"></div>
                                <button onClick={() => signOut()} className="flex gap-2 items-center">
                                    <MdLogout /> Cerrar Sesion
                                </button>
                            </> :
                            <>
                                <Link href={"/login"} className=" cursor-pointer hover:bg-on-primary hover:text-primary  bg-secondary-container text-on-secondary-container px-2 py-1 rounded-xl">
                                    Iniciar Sesion
                                </Link>
                                <Link href={"/register"} className="cursor-pointer hover:bg-secondary-container hover:text-on-secondary-container bg-on-primary text-primary px-2 py-1 rounded-3xl">
                                    Registro
                                </Link>
                            </>
                        }
                    </nav>
                </div>

                {/* 5. CAPA OSCURA DE FONDO (Overlay) */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </nav>
        </div>
    );
};

export default Navbar;