import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PropTypes from 'prop-types';

import { IconChevron } from "./Icons";


export default function Dropdown({ listItems, tittleDropdown }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative">
            <button className="flex items-center" onClick={() => setIsOpen(value => !value)}>{tittleDropdown} <span className={"w-4 h-4 inline-flex transition-all items-center " + (isOpen && ' rotate-180')}><IconChevron /></span></button>
            {/* <AnimatePresence> */}
            {isOpen &&
                <motion.div key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-hidden absolute top-10 border border-farma-200 whitespace-nowrap rounded-md p-3 left-3 flex flex-col gap-2">
                    {
                        listItems.map((listItem, i) => {
                            return (
                                <a key={i} href="" className="flex items-center gap-1"><span className="inline-block w-6 h-6">{listItem.icon}</span> {listItem.title}</a>
                            )
                        })
                    }
                </motion.div>
            }
            {/* </AnimatePresence> */}
        </div>
    )
}
Dropdown.propTypes = {
    listItems: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.node.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    tittleDropdown: PropTypes.string.isRequired,
};
