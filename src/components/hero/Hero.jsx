import "./Hero.css"
import hero from "../../images/hero.png"
import {FaLinkedinIn, FaTwitter} from "react-icons/fa";
import { BsMedium } from "react-icons/bs";



const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-title">
                <h2>Blog Posts</h2>
                <h3>I think so, this is it.</h3>
                <p>Design begins after I begin to think about how to present an experience most successfully, whether a
                    button I put in can solve a problem. The only point in design is not ui design, if the user does not
                    have a good experience at the end of the product, the design will be considered unsuccessful in my
                    opinion.
                </p>
                <div className="buttons">
                    <button className="twitter"> <FaTwitter/> Twitter</button>
                    <button className="linkedin"> <FaLinkedinIn/> Linkedin</button>
                    <button className="medium"> <BsMedium/> Medium</button>
                </div>
            </div>
            <div className="hero-img">
                <img src={hero} alt="Hero"/>
            </div>
        </div>
    )
}
export default Hero
