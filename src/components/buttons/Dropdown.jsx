import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import PropTypes from 'prop-types';

import { IconChevron } from "../Icons";
import { Link, useLocation } from "react-router-dom";


export default function Dropdown({ listItems, tittleDropdown }) {
    const location = useLocation()
    const pathName = location.pathname
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative select-none">
            <button className="flex items-center whitespace-nowrap" onClick={() => setIsOpen(value => !value)}>{tittleDropdown} <span className={"w-4 h-4 inline-flex transition-all items-center " + (isOpen && ' rotate-180')}><IconChevron /></span></button>


            {isOpen &&
                <>
                    {/* the close button when clicked anywhere other than the dropdown content */}
                    <button type="button" className="fixed z-10 top-0 bottom-0 left-0 right-0" onClick={() => setIsOpen(false)}></button>

                    {/* dropdown content */}
                    <AnimatePresence mode="wait">
                        <motion.div key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-hidden absolute z-10 top-10 border bg-white border-farma-200 whitespace-nowrap rounded-md p-3 right-3 flex flex-col gap-3">
                            {
                                listItems.map((listItem, i) => {
                                    return (
                                        <div key={i} className="relative">
                                            <Link to={listItem.to} className="flex items-center gap-1 mb-1"><span className="inline-block w-6 h-6">{listItem.icon}</span> {listItem.title}</Link>
                                            {pathName == listItem.to &&
                                                <motion.span initial={{ width: 0 }} layout={'size'} animate={{ width: '100%' }} exit={{ width: 0 }} layoutId="dropdownActive" className="border-pale-grey border-b-2 absolute bottom-0 left-0"></motion.span>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </motion.div>
                    </AnimatePresence>
                </>
            }


        </div>
    )
}
Dropdown.propTypes = {
    listItems: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.node.isRequired,
            title: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired,
        })
    ).isRequired,
    tittleDropdown: PropTypes.string.isRequired,
};
