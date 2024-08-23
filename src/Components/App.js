import React from 'react';
import './App.css';
import Footer from "./Footer";
import HwWrapper from './HwWrapper';


function App() {
  return (
    <div className="App">
      <span>
        <h1>homework Planner</h1>
      </span>
      <div className='plan'>Plan your homework time to navigate school life with ease. 
        Schedule it, reduce stress, and meet deadlines confidently. 
        Every task you complete is a step toward your goals. 
        <br />Start planning today for a successful tomorrow!</div>
     <HwWrapper />
     <div className='paragraph'>
      <h3>
Embarking on your homework is not just a task; 
it's a journey towards mastering the subjects you're passionate about.<br />
 Each problem you solve, each essay you write, and each experiment you conduct is a step closer to understanding the world around you.
  <br />
  Remember, homework is not a burden but a canvas,
   where you paint your future with the knowledge you gain today. It's a bridge that connects your dreams to reality.
    So, take a deep breath, gather your determination, and dive into your studies with excitement and curiosity. 
    Your efforts today will shape the brilliant mind of tomorrow. <br />
    Let your homework be the key that unlocks the door to a world of possibilities.
 Keep learning, keep growing, and let the joy of discovery be your guide! 
 </h3>
     </div>
     <Footer />

    
    </div>
  );
}

export default App;
