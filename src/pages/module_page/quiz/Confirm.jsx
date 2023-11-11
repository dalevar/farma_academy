import { Link } from "react-router-dom";

export default function ConfirmQuiz() {
    return (
        <main className="flex-auto flex justify-center items-center">
            <div className="flex flex-col items-center">
                <p>Anda akan segera menyelesaikan kuis ini. Apakah Anda yakin untuk melanjutkan?</p>
                <p>Harap periksa kembali dan yakinkan jawaban Anda</p>

                <div className=" mt-20 flex gap-5">
                    <Link to={'/module/materi/access/learning/quiz'} className="px-4 py-2 bg-transparent border-2 border-primary-dark rounded-md">Periksa Kembali</Link>
                    <Link to={'/module/materi/access/learning'} className="px-4 py-2 bg-primary-dark text-white border-2 border-primary-dark rounded-md" >Kirim Jawaban</Link>
                </div>
            </div>
        </main>
    )
}