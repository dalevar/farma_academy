import { Link } from "react-router-dom";

export default function TheSolutionOffered() {
    return (
        <section>
            <div className="flex justify-between items-end container mx-auto border-b-2 py-10 px-3">
                <p className="text-4xl font-semibold max-w-lg">Solusi belajar farmasi yang terjangkau dan efektif</p>
                <Link to={'/register'} className="py-2 px-3 bg-farma-700 text-white rounded-md">Daftar Sekarang</Link>
            </div>
            <div className="flex container mx-auto px-3 mt-5">
                <div className="flex-auto flex gap-3 flex-col">
                    <div className="py-2 bg-primary-darkest text-white rounded-md text-center text-xl">
                        Program pembelajaran yang lengkap dan komprehensif
                    </div>
                    <div className="py-2 border-2 rounded-md text-center text-xl">
                        Fitur pembelajaran yang interaktif dan biaya yang terjangkau
                    </div>
                    <div className="py-2 border-2 rounded-md text-center text-xl">
                        Konsultan pengajar yang kompeten dan profesional
                    </div>
                    <div className="py-2 border-2 rounded-md text-center text-xl">
                        Pelajari dan langsung coba experience ditempat kerja yang sesuungguhnya.
                    </div>
                </div>
                <div className="basis-3/4 flex justify-center">
                    <img src="/images/landingPages/landingPage3.png" alt="" />
                </div>
            </div>
        </section>
    )
}