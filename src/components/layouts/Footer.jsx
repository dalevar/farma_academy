import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-farma-700 py-10 text-farma-50 px-">
            <div className="container mx-auto flex">
                <div className="basis-[30%]">
                    <div className="w-full">
                        <img src="/logos/BigLogo.png" alt="" />
                    </div>
                    <div>
                        <p className="break-words leading-tight text-sm w-full text-center">Academy Online Farmasi pertama yang telah berkerjasama dengan DUDI</p>
                    </div>
                </div>
                <div className="flex justify-evenly flex-auto flex-wrap">
                    <div className="flex flex-col gap-4">
                        <span className="font-semibold">Our Company</span>
                        <ul className="flex flex-col gap-2 text-farma-200">
                            <li><Link to={''} preventScrollReset>Our Team</Link></li>
                            <li><Link to={''} preventScrollReset>Company Vision</Link></li>
                            <li><Link to={''} preventScrollReset>Our History</Link></li>
                            <li><Link to={''} preventScrollReset>Investorys</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-semibold">Our Resources</span>
                        <ul className="flex flex-col gap-2 text-farma-200">
                            <li><Link to={''} preventScrollReset>The Blog</Link></li>
                            <li><Link to={''} preventScrollReset>Downloads</Link></li>
                            <li><Link to={''} preventScrollReset>Change Log</Link></li>
                            <li><Link to={''} preventScrollReset>Slack Channel</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-semibold">Our Product</span>
                        <ul className="flex flex-col gap-2 text-farma-200">
                            <li><Link to={''} preventScrollReset>New Features</Link></li>
                            <li><Link to={''} preventScrollReset>Roadmap</Link></li>
                            <li><Link to={''} preventScrollReset>Product Demo</Link></li>
                            <li><Link to={''} preventScrollReset>Pricing</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}