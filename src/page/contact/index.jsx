import { contactData } from '../../data/Data';
import { useEffect, useState } from 'react';
import './contact.scss';

export default function Contact() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === contactData.carousel.images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contact">
      <div 
        className="contact__banner"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contactData.banner.backgroundImage})`
        }}
      >
        <h1>{contactData.banner.title}</h1>
      </div>

     

      <div className="contact__form-container">
        <p className="contact__form-text">PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM</p>
        
        <form className="contact__form">
          <div className="contact__form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="contact__form-row">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea placeholder="Message" className="contact__message"></textarea>
          <button type="submit" className="contact__submit">Submit</button>
        </form>
      </div>
      <div className="contact__carousel">
        <div 
          className="contact__carousel-inner"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {contactData.carousel.images.map((img, index) => (
            <div key={index} className="contact__carousel-item">
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="contact__subscribe">
        <div className="contact__subscribe-text">
          <h2>Join <span>{contactData.subscribe.readers}</span> Monthly Readers.</h2>
          <p>Subscribe Today!</p>
        </div>
        <div className="contact__subscribe-form">
          <input type="email" placeholder="Email Address" />
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
