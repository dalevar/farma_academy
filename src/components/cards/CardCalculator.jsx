import PropTypes from 'prop-types';

export default function CardCalculator({ calculatorTitle, href }) {
    return (
        <a href={href} className="flex flex-col items-center bg-farma-100 w-32 p-3 justify-center gap-4 rounded-md shadow-CardShadow">
            <div>
                <img src="/images/calculator.png" alt="" />
            </div>
            <div>
                <p className="text-center leading-snug">{calculatorTitle}</p>
            </div>
        </a>
    )
}

CardCalculator.propTypes = {
    calculatorTitle: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};