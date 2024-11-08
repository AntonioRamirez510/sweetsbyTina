import instagram from '/insta-icon.png'
import email from '/email-logo.png'
import phone from '/phone-logo.png'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="stay-connected">Let's stay connected!</h2>
      <div className="icon-contianer">
        <a href="https://www.instagram.com/sweetsbytinaa/">
          <img className= "footer-icon" src={instagram}></img>
        </a>
        <img className= "footer-icon" src={email}></img>
        <a href="tel:+1234567890">
          <img className= "footer-icon" src={phone}></img>
        </a>
      </div>
    </div>
  )
}

export default Footer;
