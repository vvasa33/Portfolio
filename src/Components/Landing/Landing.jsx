import SectionWrapper from '../SectionWrapper.jsx';
import githubIcon from "../../assets/icons/Github.svg";
import linkedinIcon from "../../assets/icons/Linkedin.svg";
import './Landing.css'
export default function Landing() {
    return (
        <SectionWrapper>
            <div className="container">
                <div className="website-title">visuvasa.com</div>
                <div className="main-title">Viswanath Vasa</div>
                <div className="subtitle">Software Engineer / Cybersecurity Analyst</div>

                <div className="nav-container">
                    <div className="nav-item">About</div>
                    <div className="nav-item">Projects</div>
                    <div className="nav-item">Contact</div>
                </div>

                <div className="icon-container">
                    <a href={"https://github.com/vvasa33"} target={"_blank"} rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" className="social-icon" />
                    </a>

                    <a href={"https://www.linkedin.com/in/visu-vasa-8a627724a/"} target={"_blank"} rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                    </a>

                </div>

                <div className="scroll-text">Scroll to Continue...</div>
            </div>
        </SectionWrapper>
    )
}