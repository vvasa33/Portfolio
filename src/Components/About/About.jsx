import SectionWrapper from '../SectionWrapper.jsx';
import './About.css';

export default function About() {
    return (
        <SectionWrapper>
            <div className="about-container">
                <div className="website-title">visuvasa.com</div>
                <div className="about-section">
                    <div className="about-title">ABOUT</div>
                    <div className="title-underline"></div>
                </div>
                <div className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                    sed do eiusmod tempor incididunt ut labore et dolore<br/>
                    magna aliqua. Ut enim ad minim veniam, quis nostrud<br/>
                    exercitation ullamco laboris nisi ut aliquip ex ea<br/>
                    commodo consequat. Duis aute irure dolor in reprehenderit<br/>
                    in voluptate velit esse cillum dolore eu fugiat nulla<br/>
                    pariatur. Excepteur sint occaecat cupidatat non<br/>
                    proident, sunt in culpa qui officia deserunt mollit<br/>
                    anim id est laborum.
                </div>
            </div>
        </SectionWrapper>
    );
}