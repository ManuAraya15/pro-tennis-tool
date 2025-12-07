import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { MdLogout } from 'react-icons/md'

export default function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement | null>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })

    return (
        <>
            <div
                ref={ref}
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex items-center"
            >
                <CgProfile className='text-2xl' />
                {isOpen ?
                    <IoIosArrowUp />
                    :
                    <IoIosArrowDown />

                }
                {isOpen &&
                    <div className="absolute right-0 top-5 sm:top-8 z-10 mt-2 w-32 origin-top-right bg-white p-2 max-h-[400px] snap-y overflow-auto shadow-lg rounded ring-1 ring-black ring-opacity-5">
                        <Link href="/" className='flex items-center  overflow-hidden text-black w-full hover:text-primary '>
                            <CgProfile /> Mi perfil
                        </Link>
                        <Link href="/" className='flex items-center  overflow-hidden text-black w-full hover:text-primary '>
                            <MdLogout /> Cerrar Sesion
                        </Link>
                    </div>
                }
            </div>
        </>
    )
}
