import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  const aboutMeArray = Array.from('About me')

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters strArray={aboutMeArray} index={15} />
        </h1>
      </div>
    </div>
  )
}

export default About
