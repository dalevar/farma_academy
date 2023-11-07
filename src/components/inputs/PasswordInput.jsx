import PropTypes from 'prop-types'
import { IconEyes } from '../Icons';
import { useState } from 'react';

export default function PasswordInput({ name, placeholder }) {
    const [isLook, setIsLook] = useState(false)

    return (
        <div className="relative flex items-center select-none">
            <input type={isLook ? 'text' : 'password'} name={name} placeholder=" " required id={name} className={"peer border-2 border-farma-950 rounded-md w-full py-2 px-2 outline-none "} />
            <label htmlFor={name} className={"peer transition-all absolute text-farma-900/70 text-xs left-2 -top-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl peer-placeholder-shown:left-2 peer-focus:-top-2 peer-focus:text-xs bg-white px-1 after:content-['*'] after:text-red-500"}>{placeholder}</label>
            <button type="button" onClick={() => setIsLook(value => !value)} className='w-6 h-6 absolute right-2'><span className='relative flex items-center justify-center'><IconEyes />{isLook && <span className='absolute block top-0 bottom-0 rotate-[135deg] border-l-2 border-black'></span>}</span></button>
        </div>
    )
}

PasswordInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}