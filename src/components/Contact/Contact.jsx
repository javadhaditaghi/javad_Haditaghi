import PropTypes from "prop-types"
import { Icon } from "@iconify/react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = ({ data }) => {
  const { contactInfo, contactForm } = data;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handler for input field changes
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    };



    emailjs.send('service_da38xur', 'template_h6axh2k', templateParams, "3QBRRLiK-ewtAyb4D")
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
      }, (err) => {
        console.error('FAILED...', err);
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      data-scroll-index={5}
      className="section contact-section"
    >
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <SectionHeading title="Reach out to me" subTitle="Contact" />
            <div className="contact-info">
              <ul>
                {contactInfo.map((element, index) => (
                  <li key={index} data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <div className="icon">
                      <Icon icon={`bi:${element.icon}`} />
                    </div>
                    <div className="text">
                      <label>{element.title}</label>
                      <p>
                        {element.text}
                        <span>
                          {element.emailLink &&
                            <a
                              className="text-reset"
                              href="mailto:info@domainname.com"
                            >
                              {element.emailLink}
                            </a>
                          }
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="google-map" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                <div className="ratio ratio-21x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d519956.52040278504!2d59.49905921856214!3d36.15049805209619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c90ef1e8aebfb%3A0x488788bc9eb65d8c!2sMashhad%20Railway%20Station!5e0!3m2!1sen!2s!4v1718274747378!5m2!1sen!2s"
                    allowFullScreen=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <div className="contact-form bg-g" data-aos="fade-left" data-aos-duration="800" data-aos-delay="1000">
              <div className="contact-head">
                <h4>{contactForm.title}</h4>
                <p>{contactForm.text}</p>
              </div>
              <form onSubmit={onSubmit} id="contact-form" method="POST">
                <input type="hidden" name="from_name" value="Javad Haditaghi" />
                <input type="hidden" name="replyto" value="javadht1990a@gmail.com" />
                <div className="row gx-3 gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">First name</label>
                      <input
                        name="name"
                        id="name"
                        placeholder="Name *"
                        className="form-control"
                        type="text"
                        onChange={handleInputChange}
                        value={formData.name}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Your Email</label>
                      <input
                        name="email"
                        id="email"
                        placeholder="Email *"
                        className="form-control"
                        type="email"
                        onChange={handleInputChange}
                        value={formData.email}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        name="subject"
                        id="subject"
                        placeholder="Subject *"
                        className="form-control"
                        type="text"
                        onChange={handleInputChange}
                        value={formData.subject}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Your message</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your message *"
                        rows={6}
                        className="form-control"
                        onChange={handleInputChange}
                        value={formData.message}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn dark w-100"
                        type="submit"
                        value="Send"
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Contact.propTypes = {
  data: PropTypes.object
}

export default Contact;
