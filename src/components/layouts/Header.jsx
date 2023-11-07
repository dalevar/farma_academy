import { IconBurger, IconPharmacy, IconSubwayBook, IconForum, IconJob, IconEvent } from "../Icons";
import Dropdown from "../buttons/Dropdown";
import LoginButton from "../buttons/LoginButton";
// import { Link } from "react-router-dom";
import SearchInput from "../inputs/SearchInput";


export default function Header() {

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
                to: '/forum',
            },
            {
                icon: <IconJob />,
                title: 'Job',
                to: '/job',
            },
            {
                icon: <IconEvent />,
                title: 'Event',
                to: '/event',
            },
        ],
    }


    return (
        <header className="sticky top-0 select-none z-50 after:w-full after:content-[''] after:-z-10 after:absolute after:top-0 after:h-full after:bg-white/75 after:backdrop-blur-sm">
            <nav className="flex container mx-auto items-center justify-between px-3">
                <div className="flex items-center gap-2">
                    {/* logo */}
                    <a href={'/'}>
                        <img src="/logos/Logo.png" alt="Logo" width={90} />
                    </a>

                    {/* search form */}
                    <form>
                        <SearchInput />
                    </form>

                </div>




                {/* nav ketika lebih dari lg */}
                <div className="items-center gap-2 hidden lg:flex">
                    {/* Nav */}
                    <div className="flex gap-3 whitespace-nowrap mr-4 text-sm">
                        <div>
                            <a href={'/'}>Home</a>
                        </div>

                        <div>
                            <Dropdown tittleDropdown="Materi Belajar" listItems={dropdownListItems.materiBelajar} />
                        </div>

                        <div>
                            <a href={'/#calculator'}>Hitung Cepat</a>
                        </div>

                        <div>
                            <Dropdown tittleDropdown="Community" listItems={dropdownListItems.community} />
                        </div>

                        <div>
                            <a href="/langganan">Langganan</a>
                        </div>
                    </div>


                    {/* Login or Regis */}
                    <div className="flex gap-2">
                        <LoginButton />
                        <a href={'/register'} className="inline-block px-4 py-2 text-farma-50 bg-farma-800 rounded-md">Daftar</a>
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