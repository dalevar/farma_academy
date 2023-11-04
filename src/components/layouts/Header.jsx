import { IconBurger, IconChevron, IconSearch } from "../Icons";

export default function Header() {

    return (
        <header className="sticky top-0 bg-white/75">
            <nav className="flex container mx-auto items-center justify-between px-3 lg:px-0">
                <div className="flex items-center gap-2">
                    {/* logo */}
                    <img src="/logos/Logo.png" alt="Logo" width={90} />

                    {/* search form */}

                    <form>
                        <div className="relative flex items-center">
                            <input type="text" name="search" id="search" className="border border-farma-400 pr-3 pl-10 w-full outline-none py-2 rounded-md" placeholder="Materi apa yang kamu cari ?" />
                            <label htmlFor="search" className="absolute left-2 w-6 h-6"><IconSearch /></label>
                        </div>
                    </form>
                </div>


                {/* nav ketika lebih dari lg */}
                <div className="items-center gap-5 hidden lg:flex">
                    {/* Nav */}
                    <div className="flex gap-5 text-lg">
                        <div>
                            <button className="">Materi Belajar <span className="inline-block w-4 h-4"><IconChevron /></span></button>
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
                        <a href="" className="inline-block px-4 py-2 text-farma-800 bg-farma-200 rounded-md">Masuk</a>
                        <a href="" className="inline-block px-4 py-2 text-farma-50 bg-farma-800 rounded-md">Daftar</a>
                    </div>
                </div>

                {/* nav ketika kurang dari lg */}
                <div className="lg:hidden">
                    <button type="button" className="w-14 h-14"><IconBurger /></button>
                </div>
            </nav>
        </header>
    )
}