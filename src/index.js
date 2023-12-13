import React from 'react';
import ReactDOM from 'react-dom';


/* functional component*/

function Sun(){
  return<h1>
    sun is the biggest star of the solar system
  </h1>

}

function Moon(){
  return(
    <div>
      <h1>earth has only one moon</h1>
      <h2>moon is the beauty of the earth</h2>
      
    </div>
  )
}

function Star(){
  return(<div>
    <Sun/>
    <Moon/>
    <h1>star is a hot glowing gas</h1>
    </div>
  );
}

ReactDOM.render(<Star/>,document.getElementById("root"));


/* class component*/


class Sibling extends React.Component{
  render(){
    return(
      <div>
        <h1 style={{ color:"purple", textTransform:"capitalize"}}>siblings are unbreakable bond</h1>
        <h2>siblings are the pillar of support</h2>
      </div>
    );
  }
}



class Brotherhood extends React.Component{
  render(){
    return(<div>
      <Sibling/>
      <h1 style={{color:"skyblue",textTransform:"capitalize"}}>brotherhood is bond that takes the reposibility of being:</h1>
      <h3>brother</h3>
      <h3>partner in crime</h3>
      <h3>bestfriend</h3>
    </div>);
  }
}

ReactDOM.render(<Brotherhood/>,document.getElementById("root"));