import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Update the page title whenever the route changes
    document.title = "Contact"; // Replace with your desired title
  }, []);
    return <h1>Contact Me</h1>;
  };
  
  export default Contact;