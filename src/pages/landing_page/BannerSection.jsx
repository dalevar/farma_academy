import { IconSubwayBook } from "../../components/Icons";

export default function BannerSection() {
    return (
        <section className="min-h-screen flex items-center container mx-auto px-4">
            <div className="md:basis-2/3 flex flex-col gap-4 px-3 lg:px-0">
                <div>
                    <p className="break-words text-farma-950 font-bold md:text-5xl text-2xl leading-tight tracking-tight">Daftar sekarang dan jadilah apoteker
                        dan tenaga kesehatan lainnya  di bidang farmasi yang andal!</p>
                </div>
                <div>
                    <p className="break-words text-farma-800 md:text-xl text-sm pl-4 leading-tight">Wujudkan impianmu menjadi apoteker atau tenaga kesehatan lainnya di bidang farmasi</p>
                </div>
                <div className="flex md:gap-5 gap-2 pl-4 mt-4">
                    <a href="" className="rounded-md flex items-center px-4 py-2 bg-farma-500 whitespace-nowrap"><span className="inline-block w-6 h-6"><IconSubwayBook /></span> Mulai Belajar</a>
                    <span className="border-l-2 border-black"></span>
                    <a href="" className="rounded-md px-4 py-2 bg-farma-700 text-farma-100">Telusuri</a>
                </div>
            </div>
            <div className="hidden lg:block">
                <img src="/images/landingPages/landingPage1.png" alt="" />
            </div>
        </section>
    )
}