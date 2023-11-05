import PropTypes from 'prop-types'

export default function ButtonSubmit({ text }) {
    return (
        <button type="submit" className='w-full py-3 bg-farma-300 text-farma-950 rounded-md '>{text}</button>
    )
}

ButtonSubmit.propTypes = {
    text: PropTypes.string.isRequired,
}