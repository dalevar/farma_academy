import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CardModule({ moduleTitle, to }) {
  return (
    <Link to={to} preventScrollReset className="border-2 border-primary-dark rounded-2xl">
      <div className="flex justify-center">
        <img src="/images/modul/modul.png" alt="" />
      </div>
      <div className="-mt-5 pb-5 text-xl font-semibold">
        <p className="text-center">{moduleTitle}</p>
      </div>
    </Link>
  );
}

CardModule.propTypes = {
  moduleTitle: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
