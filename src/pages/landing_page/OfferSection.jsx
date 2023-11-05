import PropTypes from 'prop-types'
import { IconChecked } from "../../components/Icons";
import { Link } from 'react-router-dom';

export default function OfferSection() {
    return (
        <section className="bg-farma-100 mt-20 text-farma-950 px-4">
            <div className="container mx-auto flex items-center min-h-screen">
                <div className="flex-auto flex justify-center">
                    <div className="w-[32rem] h-[32rem] bg-farma-800 rounded-2xl relative">
                        <img src="/images/landingPages/landingPage2.png" alt="" className="relative w-full h-full bg-farma-500 top-6 left-6 rounded-2xl" />
                    </div>
                </div>
                <div className="basis-1/2">
                    <p className="break-words mb-1 tracking-wide">Ingin menjadi apoteker yang sukses?</p>
                    <p className="break-words text-4xl font-semibold tracking-tight leading-tight">Ayo, raih karier yang lebih baik bersama Farma Academy!</p>
                    <div className='flex flex-col gap-4 mt-8'>
                        <CheckedItem text='Module pembelajaran yang lenkap' />
                        <CheckedItem text='Forum diskusi dengan teman lainnya' />
                        <CheckedItem text='Hitungan yang cepat dan tepat' />
                        <CheckedItem text='Konsultan mentor yang professional' />
                    </div>
                    <Link to={'/register'} className='px-4 py-2 bg-farma-600 rounded-md mt-8 inline-block text-farma-50'>Daftar Sekarang</Link>
                </div>
            </div>
        </section>
    )
}



function CheckedItem({ text }) {
    return (
        <div className="flex gap-2">
            <span className="w-6 h-6 inline-block"><IconChecked /></span>
            <p className="break-words">{text}</p>
        </div>
    )
}
CheckedItem.propTypes = {
    text: PropTypes.string.isRequired
}
