import { motion, useScroll } from "framer-motion";
import styles from "./Bar.module.css"

export function Bar() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div className={styles.progresBar}style={{ scaleX: scrollYProgress }} />  
  )
}