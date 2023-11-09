import {
    IconDashboard,
    IconBurger,
    IconPharmacy,
    IconSubwayBook,
    IconForum,
    IconJob,
    IconEvent,
    IconPeople,
    IconLogout,
} from "../Icons";
import Dropdown from "../buttons/Dropdown";
// import LoginButton from "../buttons/LoginButton";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "../inputs/SearchInput";
import Navbar from "./navbar/Navbar";

export default function Header() {
    const user = sessionStorage.getItem("user");

    const location = useLocation();
    const pathName = location.pathname;
    const dropdownListItems = {
        profilePicture: [
            {
                icon: <IconDashboard />,
                title: "Dashboard",
                to: "/dashboard",
            },
            {
                icon: <IconPeople />,
                title: "Profile saya",
                to: "/forum",
            },
            {
                icon: <IconForum />,
                title: "Forum diskusi",
                to: "/forum",
            },
            {
                icon: <IconLogout />,
                title: "Logout",
                to: "/logout",
            },
        ],
        materiBelajar: [
            {
                icon: <IconSubwayBook />,
                title: "Module Belajar",
                to: "/module",
            },
            {
                icon: <IconPharmacy />,
                title: "Alat-alat Laboratorium",
                to: "",
            },
        ],
        community: [
            {
                icon: <IconForum />,
                title: "Forum Diskusi",
                to: "/forum",
            },
            {
                icon: <IconJob />,
                title: "Job",
                to: "/job",
            },
            {
                icon: <IconEvent />,
                title: "Event",
                to: "/event",
            },
        ],
    };

    if (pathName === "/module/materi/access/learning") {
        return (

            <header className="sticky top-0 select-none z-50 bg-sky-700 self-stretch flex w-full items-start justify-between gap-5 pl-12 pr-8 py-1 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <a href="/module/materi/access" className="self-center flex items-start gap-2 my-auto">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/54ad5a6c-a6a3-4828-8600-a772244a77aa?apiKey=6f0257302a85476b9d26590be3d78938&"
                        className="aspect-[1.78] object-contain object-center w-4 overflow-hidden max-w-full self-start my-auto"
                    />
                    <div className="text-white text-center text-base font-bold whitespace-nowrap self-start">
                        DOSIS
                    </div>
                </a>
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b3efc877-c998-45f2-a1c3-89104287ee3f?apiKey=6f0257302a85476b9d26590be3d78938&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3efc877-c998-45f2-a1c3-89104287ee3f?apiKey=6f0257302a85476b9d26590be3d78938&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3efc877-c998-45f2-a1c3-89104287ee3f?apiKey=6f0257302a85476b9d26590be3d78938&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3efc877-c998-45f2-a1c3-89104287ee3f?apiKey=6f0257302a85476b9d26590be3d78938&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3efc877-c998-45f2-a1c3-89104287ee3f?apiKey=6f0257302a85476b9d26590be3d78938&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3efc877-c998-45f2-a1c3-89104287ee3f?apiKey=6f0257302a85476b9d26590be3d78938&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3efc877-c998-45f2-a1c3-89104287ee3f?apiKey=6f0257302a85476b9d26590be3d78938&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3efc877-c998-45f2-a1c3-89104287ee3f?apiKey=6f0257302a85476b9d26590be3d78938&"
                    className="aspect-[1.55] object-contain object-center w-[118px] overflow-hidden self-stretch max-w-full"
                />
            </header>

        );
    } else {
        return (
            <header className="sticky top-0 select-none z-50 after:w-full after:content-[''] after:-z-10 after:absolute after:top-0 after:h-full after:bg-white/75 after:backdrop-blur-sm">
                <nav className="flex container mx-auto items-center justify-between px-3">
                    <div className="flex items-center gap-2">
                        {/* logo */}
                        <Link to={"/"}>
                            <img src="/logos/Logo.png" alt="Logo" width={90} />
                        </Link>

                        {/* search form */}
                        {
                            user ? '' :
                                <form>
                                    <SearchInput />
                                </form>

                        }
                    </div>

                    {/* nav ketika lebih dari lg */}
                    <div className="items-center gap-2 hidden lg:flex">
                        {/* Nav Not Login*/}
                        <Navbar />

                    {/* Login or Regis */}
                    <div className="flex gap-2">

                        {user ?
                            <>
                                <Dropdown tittleDropdown={<img src="/images/landingPages/landingPage3.png" alt="" className="w-10 h-10 object-cover rounded-full"/>} listItems={dropdownListItems.profilePicture} />
                            </>
                            :
                            <>
                                <Link preventScrollReset to={'/login'} className="inline-block px-4 py-2 text-farma-800 bg-farma-200 rounded-md">Masuk</Link>
                                <Link preventScrollReset to={'/register'} className="inline-block px-4 py-2 text-farma-50 bg-farma-800 rounded-md">Daftar</Link>
                            </>

                        }
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