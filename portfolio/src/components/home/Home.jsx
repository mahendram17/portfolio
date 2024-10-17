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
        <h1>Hello, I am</h1>
        <h1>Raj Mane</h1>
        <h3>Front-end Developer / UI Designer</h3>
        <div className="social-icons">
          {/* Add icons as per your design */}
          <a href="linkedin.com"><img src='/images/linkedin.png' width="30px"/></a>
          <a href='github.com'><img src='/images/github.png' width="30px"/></a>
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

