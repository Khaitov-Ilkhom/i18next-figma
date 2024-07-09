import "./Navbar.css"
import {NavLink, Outlet} from "react-router-dom";
import logo from "../../images/logo-text.png"
import logo2 from "../../images/Hire Me.png"
import {Select} from "antd";
import {useTranslation} from "react-i18next";
import Container from "../container/Container.jsx";

const Navbar = () => {
    const data = useTranslation()

    const onLngChange = (e) => {
        data.i18n.changeLanguage(e)
        localStorage.setItem("lang", e)
    }
    return (
        <Container>
            <div className="navbar">
                <div className="logo-images">
                    <img src={logo} alt="Logo"/>
                    <img src={logo2} alt="Logo"/>
                </div>
                <nav className="nav">
                    <ul>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/">Blog</NavLink></li>
                        <li><NavLink to="/cv">CV</NavLink></li>
                        <li><NavLink to="/store">Store</NavLink></li>
                        <li><NavLink to="/freelance">Freelance</NavLink></li>
                        <li><NavLink to="/about-me">About Me</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    {/*<Select*/}
                    {/*    showSearch*/}
                    {/*    defaultValue={"uz"}*/}
                    {/*    onChange={onLngChange}*/}
                    {/*    options={langOption}*/}
                    {/*    style={{width: "100px"}}*/}
                    {/*/>*/}
                </nav>
            </div>
            <Outlet/>
        </Container>
    )
}
export default Navbar
