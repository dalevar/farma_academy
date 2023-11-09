import { useLocation } from "react-router-dom"
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export default function NavActiveAnimation({ to }) {
    const location = useLocation()
    const pathName = location.pathname


    return (
        <>
            {pathName == to && (
                <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    layout="size"
                    layoutId="nav-active"
                    className="inline-block w-full border-b-2 border-pale-grey absolute bottom-0 left-0"
                ></motion.span>
            )}
        </>
    )
}

NavActiveAnimation.propTypes = {
    to: PropTypes.string.isRequired,
}