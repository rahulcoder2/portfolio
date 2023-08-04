import { motion } from "framer-motion";

import { styles } from "../app/styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component) =>
  function HOC() {
    return (
      <div>
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} max-w-7xl mx-auto relative z-0 pt-20`}
        >
          <Component />
        </motion.section>
      </div>
    );
  };

export default SectionWrapper;
