import '../App.css';
import Form from './Form.jsx';
import './Contact.css';

function Contact({ sectionRef }) {
  return (
    <section ref={sectionRef} id="contact" tabIndex={-1}>
      <div className="sections contact">
          <div className="contact-header">
              <h1>contact <span className="alt-text">me</span></h1>
          </div>
          <div className="contact-content">
              <Form />
          </div>
      </div>
    </section>
  );
}

export default Contact;