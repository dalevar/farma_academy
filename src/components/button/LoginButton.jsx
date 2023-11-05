import { useState } from "react"

export default function LoginButton() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button type="button" onClick={() => setIsOpen(value => !value)} className="inline-block px-4 py-2 text-farma-800 bg-farma-200 rounded-md">Masuk</button>

            <div className="fixed z-10 flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-slate-100">
                <div></div>
            </div>
        </>

    )
}