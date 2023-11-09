import PropTypes from 'prop-types';
import { IconCalculator } from '../Icons';
import { Link } from 'react-router-dom';

export default function CardCalculator({ calculatorTitle, href }) {
    return (
        <Link to={href} preventScrollReset className="border-2 rounded-lg border-farma-600 p-4 flex flex-col items-center">
            <div className="w-10 h-10">
                <IconCalculator />
            </div>
            <div>
                <p className="w-32 text-center mt-5 text-sm text-farma-700">{calculatorTitle}</p>
            </div>
        </Link>
    )
}

CardCalculator.propTypes = {
    calculatorTitle: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};
