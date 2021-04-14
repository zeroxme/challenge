import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };

const cardVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: .2, ...transition }
  }
};

const frameVariants = {
  hover: { scale: 0.95 }
};

export default function Card({ id, location, city, image }) {
  return (
    <motion.div className="col-12" variants={cardVariants}>
      <motion.div
        className="frame card"
        whileHover="hover"
        variants={frameVariants}
        transition={transition}
        style={{ backgroundImage: `url('images/${image}')` }}
      >
        <Link to={`/${id}`} className="d-block">
          <div className="card-title card-title-left d-flex align-items-center">
            <div>
              <h1 className="text-white m-0 p-0 h4">{location}</h1>
              <h2 className="text-white m-0 p-0 h6">{city}</h2>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  )
}