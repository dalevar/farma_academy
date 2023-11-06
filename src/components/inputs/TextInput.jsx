import PropTypes from 'prop-types'

export default function TextInput({ name, type, placeholder, required }) {
    return (
        <div className="relative flex items-center select-none">
            <input type={type} name={name} placeholder=" " required={required} id={name} className={"peer border-2 border-farma-200 rounded-md w-full py-2 px-2 outline-none "} />
            <label htmlFor={name} className={"peer transition-all absolute text-farma-900/70 text-xs left-2 -top-2 peer-placeholder-shown:top-1 peer-placeholder-shown:text-xl peer-placeholder-shown:left-2 peer-focus:-top-2 peer-focus:text-xs bg-white px-1" + (required && " after:content-['*'] after:text-red-500")}>{placeholder}</label>
        </div>
    )
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['email', 'text', 'password']),
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool
}
TextInput.defaultProps = {
    type: 'text',
    required: false,
};