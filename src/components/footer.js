import Logo from "./navbar/logo";
import "./info.css"

export default function Footer() {
    return (
        <div className="footer">
        <div className="footer-content">
            <div className="footer-content-left">
            
            <div className="footer-content-left-text">
                <p>
                Power Thru is a non-profit organization that aims to help people
                overcome their addiction
                </p>
            </div>
            </div>
            <div className="footer-content-right">
            <div className="footer-content-right-links">
                <div className="footer-content-right-links-title">
                <h3>Links</h3>
                </div>
                <div className="footer-content-right-links-links">
                <ul></ul>
                </div>
            </div>
            <div className="footer-content-right-contact">
                <div className="footer-content-right-contact-title">
                <h3>Contact</h3>
                </div>
                <div className="footer-content-right-contact-links">
                <ul></ul>
                </div>
            </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-text">
            <p>© 2022 Power Thru</p>
            </div>
        </div>
        </div>
    );
}