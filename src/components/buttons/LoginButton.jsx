import { useState } from "react"
import { IconClose } from "../Icons"
import TextInput from "../inputs/TextInput"
import ButtonSubmit from "./ButtonSubmit"
import PasswordInput from "../inputs/PasswordInput"

export default function LoginButton() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <button type="button" onClick={() => setIsOpen(value => !value)} className="inline-block px-4 py-2 text-farma-800 bg-farma-200 rounded-md">Masuk</button>

            {
                isOpen &&
                <div className="fixed -z-10 flex justify-center items-center top-0 left-0 right-0 bottom-0 select-none">
                    <button type="button" onClick={() => setIsOpen(false)} className="absolute bg-black/10 top-0 bottom-0 left-0 right-0">dasf</button>
                    <div className="py-4 bg-white shadow-xl rounded-md max-w-md w-full relative z-10">
                        <div className="border-b-2 border-black flex justify-between items-center pb-3 px-4">
                            <span className="font-semibold text-2xl">Masuk</span>
                            <button type="button" onClick={() => setIsOpen(false)} className="inline-block w-6 h-6"><IconClose /></button>
                        </div>
                        <div className="mt-3 px-4 py-4">
                            <form className="flex flex-col gap-5">
                                <TextInput name="email" placeholder="Email" type="email" required />
                                <PasswordInput name="password" placeholder="Password" />
                                <ButtonSubmit text="Masuk" />
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div >

    )
}