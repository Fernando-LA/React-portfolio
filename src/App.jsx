import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import { About } from './components/About/Abouts.jsx'
import { Experience } from './components/Experience/Experience.jsx'
import { Projects } from './components/Projects/Projects.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { Bar } from './components/Bar/Bar.jsx'


function App() {

  return (
    
    <div className={styles.App}>
      <Bar />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  
  )
}

export default App
