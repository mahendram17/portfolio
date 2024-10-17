// import React from 'react';
// import './Home.css'; 


// function Home() {
//   return (
//    <div className="main">
//     <div className='first-section'></div>
//     <div className='second-section'></div>
//    </div>
//   );
// }

// export default Home;
import React from 'react';
import './Home.css'; // Add your custom CSS here

function Home() {
  return (
    <div className="home-container ">
      <div className="intro-section">
        <h2>Hello, I am</h2>
        <h1>Raj Mane</h1>
        <h3>Front-end Developer / UI Designer</h3>
        <div className="social-icons">
          {/* Add icons as per your design */}
          <a href="mailto:example@gmail.com">@</a>
          <a href="https://github.com">GitHub</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
      </div>
      <div className="image-section">
        {/* Add the image here */}
        <img src="/portrait-hero.png" alt="Tomasz Gajda" />
      </div>
    </div>
  );
}

export default Home;

