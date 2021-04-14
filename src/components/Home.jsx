import * as React from "react";
import { motion } from "framer-motion";
import { Data } from './data'
import Card from "./Card";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <motion.div
          className="col-12"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
          <div className="row">
            {
              Data.map((item, i) => (
                <Card key={i} id={item.id} location={item.location} city={item.city} image={item.image} />
              ))
            }
          </div>
        </motion.div>
      </div>
    </div>
  )
};
