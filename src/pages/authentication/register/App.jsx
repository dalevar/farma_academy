import ButtonGoogleLogin from "../../../components/buttons/ButtonGoogleLogin";
import ButtonSubmit from "../../../components/buttons/ButtonSubmit";
import PasswordInput from "../../../components/inputs/PasswordInput";
import TextInput from '../../../components/inputs/TextInput'
import { Link } from "react-router-dom";


export default function RegisterPage() {
    return (
        <main className="flex-auto flex justify-center items-center">
            <div className="max-w-xl w-full">
                <h1 className="text-5xl tracking-tight mb-16 text-center border-b-2 border-black pb-5">Daftar akun</h1>

                <form className="w-full flex gap-10 flex-col px-3">
                    <TextInput name="name" placeholder="Nama Lengkap" required />
                    <TextInput name="email" placeholder="Email" type={'email'} required />
                    <PasswordInput name="password" placeholder="Password" />
                    <PasswordInput name="confirm-password" placeholder="Confirm Password" />
                    <div className="mt-5">
                        <ButtonSubmit text="Daftar" />
                    </div>

                    {/* separator */}
                    <div className="flex justify-center items-center">
                        <div className="bg-white px-2 absolute">atau</div>
                        <div className="border-b-2 border-black w-full"></div>
                    </div>

                    <ButtonGoogleLogin />

                    <div className="-mt-5">
                        <p className="break-words text-center">Sudah punya akun ? <Link to={'/login'} className="text-farma-600">Masuk Sekarang</Link></p>
                    </div>
                </form>
            </div>
        </main>
    )
}