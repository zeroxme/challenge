import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Data } from './data';

const transition = {
  duration: .5,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const cardVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition
  }
};

const backVariants = {
  exit: { y: 100, opacity: 0, transition },
  enter: { y: 0, opacity: 1, transition: { delay: .4, ...transition } }
};

export default function Details({ match }) {

  const { location, city, year, visitors, image } = Data[parseInt(match.params.id)]

  return (
    <motion.div className="single container-fluid m-0 p-0 detail" initial="exit" animate="enter" exit="exit">
      <motion.div variants={cardVariants} className="row no-gutters">
        <div className="col-12">
          <div className="card-title card-title-left d-flex align-items-center">
            <div>
              <h1 className="text-white m-0 p-0 h2">{location}</h1>
              <h2 className="text-white m-0 p-0 h6">{city}</h2>
            </div>
          </div>
          <div className="card mt-0" style={{ backgroundImage: `url('images/${image}')` }} >
          </div>
          <div className="card-info bg-white py-3 d-flex d-flex-row justify-content-around">
            <h1 className="text-info h4">{year} <span className="h6">opened</span></h1>
            <h1 className="text-info h4">{visitors} <span className="h6">million visitors</span></h1>
          </div>
        </div>

        <div className="col-9 mx-auto my-5">
          {/* <Link href="/">
            <a className="btn btn-primary">Back</a>
          </Link> */}
          <h3 className="text-white mb-4 h5"><strong>FACTS</strong></h3>
          <p className="small line-height-lg text-white">
            {/* { text } */}
            The Metropolitan Museum of Art of New York, colloquially "the Met,"[a] is the largest art museum in the United States. With 7.06 million visitors in 2016, it was the second most visited art museum in the world, and the fifth most visited museum of any kind. [8] Its permanent collection contains over two million works,[9] divided among seventeen curatorial departments. The main building, on the eastern edge of Central Park along Manhattan's Museum Mile, is by area one of the world's largest art galleries. A much smaller second location, The Cloisters at Fort Tryon Park in Upper Manhattan, contains an extensive collection of art, architecture, and artifacts from Medieval Europe. On March 18, 2016, the museum opened the Met Breuer museum at Madison Avenue in the Upper East Side; it extends the museum's modern and contemporary art program.
          </p>
        </div>



      </motion.div>
      <motion.div className="back" variants={backVariants} style={{
          position: "fixed",
          bottom: 16,
          left: 16,
        }}>
        <Link to="/" className="btn btn-light" >← Back</Link>
      </motion.div>
    </motion.div>
  )
}
