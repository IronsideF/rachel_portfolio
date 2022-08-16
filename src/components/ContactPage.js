import React from 'react'
import styled from 'styled-components';

const ContactPage = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { firstName, lastName, emailInput, subject, message } = e.target.elements;
    let details = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: emailInput.value,
      subject: subject.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  
  return (
    <ContactWrapper onSubmit={handleSubmit}>
        <h1>Contact</h1>
        <ContactForm>
        <label htmlFor="firstName">First Name</label>
            <input type="text" name='firstName' id='firstName' />
        <label htmlFor="lastName">Last Name</label>
            <input type="text" name='lastName' id='lastName' />
        <label htmlFor="emailInput">Email</label>
            <input type="email" name="emailInput" id="emailInput" />
        <label htmlFor="subject">Subject</label>
            <input type="text" name='subject' id='subject' />
            <textarea name="message" id="message" placeholder='Leave a message!' cols="30" rows="10"/>
            <input type="submit" value={status} />
        </ContactForm>
    </ContactWrapper>
  )
}

const ContactForm = styled.form`
  display:flex;
  flex-direction: column;
  width: 40vw;
    & label {
        margin-top: 3vh;
    }
    & textarea {
        margin-top: 3vh;
        margin-bottom: 3vh;
    }
`;

const ContactWrapper = styled.div`
  display:flex;
  justify-content: space-around;
`;

export default ContactPage