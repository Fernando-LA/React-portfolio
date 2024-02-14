import React from "react";
import { getImageUrl } from "../../utils";
import { Reveal } from "../utils/Reveal.tsx";

import styles from "./Abouts.module.css"

export const About = () =>{

    return (
        <section className={styles.container} id="about">
            <Reveal>
            <h2 className={styles.title}>About Me</h2>
            </Reveal>
            <div className={styles.content}>
            <Reveal>

                <img src={getImageUrl('about/aboutImg.png')} alt="Me sitting with a laptop"  className={styles.aboutImage}/>
            </Reveal>
            <Reveal>
                <ul className={styles.aboutItems}>
            

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/serverIcon.png')} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Software Developer</h3>
                            <p>I am a software developer specialized in front-end and also like to learn new technologies like the backend. I have been creating projects for two years on my own and in a team. I absolutely enojoy working in tech.</p>
                        </div>
                    </li>
            

                </ul>
                </Reveal>
            </div>
        </section>
    )
}

