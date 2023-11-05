import { useState } from "react";
import { IconBurger, IconPharmacy, IconSearch, IconSubwayBook } from "../Icons";
import Dropdown from "../Dropdown";
import LoginButton from "../button/LoginButton";


export default function Header() {
    const [search, setSearch] = useState('')

    const dropdownListItems = [
        {
            icon: <IconSubwayBook />,
            title: 'Module Belajar',
        },
        {
            icon: <IconPharmacy />,
            title: 'Alat-alat Laboratorium',
        },
    ]


    return (
        <header className="sticky top-0 backdrop-blur-sm bg-white/75 select-none z-50">
            <nav className="flex container mx-auto items-center justify-between px-3 lg:px-0">
                <div className="flex items-center gap-2">
                    {/* logo */}
                    <img src="/logos/Logo.png" alt="Logo" width={90} />

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
                            <Dropdown tittleDropdown="Materi Belajar" listItems={dropdownListItems} />
                        </div>

                        <div>
                            <a href="">Hitung Cepat</a>
                        </div>

                        <div>
                            <a href="">Langganan</a>
                        </div>
                    </div>


                    {/* Login or Regis */}
                    <div className="flex gap-2">
                        <LoginButton />
                        <a href="" className="inline-block px-4 py-2 text-farma-50 bg-farma-800 rounded-md">Daftar</a>
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