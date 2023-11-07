import PropTypes from 'prop-types'

export default function ButtonSubmit({ text }) {
    return (
        <button type="submit" className='w-full py-3 bg-primary-darkest text-farma-50 text-2xl font-semibold rounded-md select-none'>{text}</button>
    )
}

ButtonSubmit.propTypes = {
    text: PropTypes.string.isRequired,
}