import React from "react";
class Header extends React.Component {
    render() {
        return (
            <div className="App-header">	
            
        <h3>
              <a href='/about'>About</a> | 
              <a href='/contact'> Contact</a> | 
              <a href='/portfolio'> Portfolio</a> | 
              <a href='/Resume'> Resume</a>
              </h3>
              <hr/>
            </div>
        )
    }

}
export default Header;