import { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'
import { IconSearch } from "../Icons"


export default function SearchInput() {
    const [search, setSearch] = useState('')
    return (
        <div className="relative flex items-center">
            <input onInput={(event) => setSearch(event.target.value)} type="text" name="search" id="search" className="border border-farma-400 pr-3 pl-10 w-full outline-none py-2 rounded-md" placeholder="Materi apa yang kamu cari ?" />
            <label htmlFor="search" className="absolute left-2 w-6 h-6"><IconSearch /></label>

            <AnimatePresence >
                {search !== '' &&
                    <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-11 rounded-md w-full border bg-white border-farma-200">
                        <div className="border rounded-md py-1 px-2 m-2 bg-white">{search}</div>
                        <a href="" className="px-4 py-2 mt-2 bg-farma-200 flex justify-between">
                            Lihat Semua Kelas <span>&gt;</span>
                        </a>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}