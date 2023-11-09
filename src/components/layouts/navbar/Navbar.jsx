import { Link } from "react-router-dom"
import Dropdown from "../../buttons/Dropdown";
import { IconEvent, IconForum, IconJob, IconPharmacy, IconSubwayBook } from "../../Icons";
import NavActiveAnimation from "./NavActiveAnimation";

export default function Navbar() {
    const dropdownListItems = {
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
    const user = sessionStorage.getItem('user')

    return (
        <>
            {user ?
                <div className="flex gap-3 whitespace-nowrap text-sm mr-10">
                    <div className="relative">
                        <Link to={'/dashboard'}>Home</Link>
                        <NavActiveAnimation to="/dashboard" />
                    </div>
                    <div className="relative">
                        <Link to={'/academy'}>Academy</Link>
                        <NavActiveAnimation to="/academy" />
                    </div>
                    <div className="relative">
                        <Link to={'/calculator'}>Hitung Cepat</Link>
                        <NavActiveAnimation to="/calculator" />
                    </div>
                    <div className="relative">
                        <Link to={'/forum'}>Community</Link>
                        <NavActiveAnimation to="/forum" />
                    </div>
                    <div className="relative">
                        <Link to={'/job'}>Job</Link>
                        <NavActiveAnimation to="/job" />
                    </div>
                </div>
                :
                <div className="flex gap-3 whitespace-nowrap mr-4 text-sm" >
                    <div className="relative">
                        <Link to={"/"}>Home</Link>
                        <NavActiveAnimation to="/" />
                    </div>

                    <div>
                        <Dropdown
                            tittleDropdown="Materi Belajar"
                            listItems={dropdownListItems.materiBelajar}
                        />
                    </div>

                    <div className="relative">
                        <Link to={"/calculator"}>Hitung Cepat</Link>
                        <NavActiveAnimation to="/calculator" />
                    </div>

                    <div>
                        <Dropdown
                            tittleDropdown="Community"
                            listItems={dropdownListItems.community}
                        />
                    </div>

                    <div className="relative">
                        <Link preventScrollReset to="/langganan">
                            Langganan
                        </Link>
                        <NavActiveAnimation to="/langganan" />
                    </div>
                </div >
            }
        </>
    )
}