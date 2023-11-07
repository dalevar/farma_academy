import { Link } from "react-router-dom";
import ButtonSubmit from "../../../components/buttons/ButtonSubmit";
import PasswordInput from "../../../components/inputs/PasswordInput";
import TextInput from '../../../components/inputs/TextInput'
import ButtonGoogleLogin from "../../../components/buttons/ButtonGoogleLogin";

export default function LoginPage() {
    return (
        <main className="flex-auto flex justify-center items-center">
            <div className="max-w-xl w-full">
                <h1 className="text-5xl tracking-tight mb-16 text-center border-b-2 border-black pb-5">Masuk akun</h1>

                <form className="w-full flex gap-10 flex-col px-3">
                    <TextInput name="email" placeholder="Email" type={'email'} required />
                    <PasswordInput name="password" placeholder="Password" />
                    <div className="mt-5">
                        <ButtonSubmit text="Masuk" />
                    </div>

                    {/* separator */}
                    <div className="flex justify-center items-center">
                        <div className="bg-white px-2 absolute">atau</div>
                        <div className="border-b-2 border-black w-full"></div>
                    </div>

                    <ButtonGoogleLogin />

                    <div className="-mt-5">
                        <p className="break-words text-center">Belum punya akun ? <Link to={'/register'} className="text-farma-600">Daftar Sekarang</Link></p>
                    </div>
                </form>
            </div>
        </main>
    )
}