import { Link } from "react-router-dom";

export default function TheSolutionOffered() {
    return (
        <section>
            <div className="flex justify-between container mx-auto border-b-2">
                <p className="">Solusi belajar farmasi yang terjangkau dan efektif</p>
                <Link className="py-2 px-3 bg-farma-700 text-white rounded-md">Daftar Sekarang</Link>
            </div>
            <div></div>
        </section>
    )
}