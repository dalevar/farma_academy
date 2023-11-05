import ButtonSubmit from "../../components/buttons/ButtonSubmit";
import PasswordInput from "../../components/inputs/PasswordInput";
import TextInput from "../../components/inputs/TextInput";

export default function Register() {
    return (
        <main className="flex-auto flex justify-center items-center">
            <div>
                <h1 className="text-5xl tracking-tight mb-10">Daftar Akun Farma Academy</h1>

                <form className="w-full flex gap-5 flex-col">
                    <TextInput name="name" placeholder="Nama Lengkap" required />
                    <TextInput name="email" placeholder="Email" type={'email'} required />
                    <PasswordInput name="password" placeholder="Password" />
                    <PasswordInput name="confirm-password" placeholder="Confirm Password" />
                    <ButtonSubmit text="Daftar" />
                </form>
            </div>
        </main>
    )
}