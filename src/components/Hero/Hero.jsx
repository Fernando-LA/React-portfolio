import React, {useState} from "react";

import styles from "./Hero.module.css"
import {getImageUrl} from "../../utils"
import { Reveal } from "../utils/Reveal.tsx";


function Hero () {

    

    return (
        <Reveal>
        <section className={styles.container}>
            
            <div className={styles.content}>
                
                <div className={styles.backText}><h1 className={styles.title}>Hi, i'm Fernando Lopez</h1></div>

                <p className={styles.description}>I'm a Software Developer,that loved tech and work!</p>
                <a href="#" className={`${styles.btn} ${styles.yellow}`}>
                <span>Contact me</span>
                <ion-icon name="arrow-forward"></ion-icon>
            </a>
            </div>

            <img src={getImageUrl('hero/heroImage.png')} alt="Hero image of me"  className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
            
        </section>
        </Reveal>
    )

}

export default Hero;