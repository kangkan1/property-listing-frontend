import React, { useEffect } from 'react';

const Blogs = () => {
  useEffect(() => {
    // Update the page title whenever the route changes
    document.title = "BLogs"; // Replace with your desired title
  }, []);
    return <h1>Blog Articles</h1>;
  };
  
  export default Blogs;