import React from "react";
import {motion} from "motion/react";

const Card = () => {
  return (
    <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }} 
        classNameName="card" style={{ width: "18rem" , backgroundColor:"grey", borderRadius: "20px"}}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
