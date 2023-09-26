import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Update the page title whenever the route changes
    document.title = "Home"; // Replace with your desired title
  }, []);
    return <h1>Home</h1>;
  };
  
export default Home;