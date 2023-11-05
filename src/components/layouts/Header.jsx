import { useState } from "react";
import { IconBurger, IconPharmacy, IconSearch, IconSubwayBook, IconForum, IconJob, IconEvent } from "../Icons";
import Dropdown from "../buttons/Dropdown";
import LoginButton from "../buttons/LoginButton";
import { Link } from "react-router-dom";


export default function Header() {
    const [search, setSearch] = useState('')

    const dropdownListItems = {
        materiBelajar: [
            {
                icon: <IconSubwayBook />,
                title: 'Module Belajar',
                to: '/modul',
            },
            {
                icon: <IconPharmacy />,
                title: 'Alat-alat Laboratorium',
                to: '',
            },
        ],
        community: [
            {
                icon: <IconForum />,
                title: 'Forum Diskusi',
                to: '',
            },
            {
                icon: <IconJob />,
                title: 'Job',
                to: '',
            },
            {
                icon: <IconEvent />,
                title: 'Event',
                to: '',
            },
        ],
    }


    return (
        <header className="sticky top-0 select-none z-50 after:w-full after:content-[''] after:-z-10 after:absolute after:top-0 after:h-full after:bg-white/75 after:backdrop-blur-sm">
            <nav className="flex container mx-auto items-center justify-between px-3 lg:px-0">
                <div className="flex items-center gap-2">
                    {/* logo */}
                    <Link to={'/'}>
                        <img src="/logos/Logo.png" alt="Logo" width={90} />
                    </Link>

                    {/* search form */}
                    <form>
                        <div className="relative flex items-center">
                            <input onInput={(event) => setSearch(event.target.value)} type="text" name="search" id="search" className="border border-farma-400 pr-3 pl-10 w-full outline-none py-2 rounded-md" placeholder="Materi apa yang kamu cari ?" />
                            <label htmlFor="search" className="absolute left-2 w-6 h-6"><IconSearch /></label>
                            {search !== '' &&
                                <div className="absolute top-11 rounded-md w-full border border-farma-200">
                                    <div className="border rounded-md py-1 px-2 m-2">{search}</div>
                                    <a href="" className="px-4 py-2 mt-2 bg-farma-200 flex justify-between">
                                        Lihat Semua Kelas <span>&gt;</span>
                                    </a>
                                </div>
                            }
                        </div>
                    </form>

                </div>




                {/* nav ketika lebih dari lg */}
                <div className="items-center gap-5 hidden lg:flex">
                    {/* Nav */}
                    <div className="flex gap-5 text-lg mr-5">
                        <div>
                            <Link to={'/'}>Home</Link>
                        </div>

                        <div>
                            <Dropdown tittleDropdown="Materi Belajar" listItems={dropdownListItems.materiBelajar} />
                        </div>

                        <div>
                            <Link to={'/#calculator'}>Hitung Cepat</Link>
                        </div>

                        <div>
                            <Dropdown tittleDropdown="Community" listItems={dropdownListItems.community} />
                        </div>

                        <div>
                            <a href="">Langganan</a>
                        </div>
                    </div>


                    {/* Login or Regis */}
                    <div className="flex gap-2">
                        <LoginButton />
                        <Link to={'/register'} className="inline-block px-4 py-2 text-farma-50 bg-farma-800 rounded-md">Daftar</Link>
                    </div>
                </div>

                {/* nav ketika kurang dari lg */}
                <div className="lg:hidden">
                    <button type="button" className="w-14 h-14"><IconBurger /></button>
                </div>
            </nav>

        </header >
    )
}