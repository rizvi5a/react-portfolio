import React from "react";
class Portfolio extends React.Component {

    render() {
        return (
            <div  className="Portfolio">
                <div>
                    <span>
                    <a href="https://github.com//the64man1/Gooberville-Foods">
                    <img src="images/Project-1.png"  alt="Project-1" /></a> 
                         </span>
                    <span>
                      <a href='https://github.com/kthendavid04/gallery'>
                     <img src="images/project-2.png"  alt="project-2" /> </a>
                    </span>
                </div>
                <div>
               <span>
             <a href="https://github.com/rizvi5a/PasswordGen">
                  <img src="images/Password-Generator.png" alt="password-Gen" /> </a>
               </span>
                <span>
             <a href="https://github.com/rizvi5a/Code-Quiz"> 
              <img src="images/Code-Quiz.png" alt="Code-quiz"/></a>
                        
                    </span>
                </div>
                <div>
                    <span>
                   <a href="https://github.com/rizvi5a/Note-Taker">
                        <img src="images/Note-Taker.png" alt="Note-Taker"/> </a>
                    </span>
                    <span>
                        
                      <a href="https://github.com/rizvi5a/tracker">  
                      <img src="images/Workout-Traker.png" alt="Workout-Traker"/> </a>
                    </span>
                </div>
                

            </div>
        )
    }

}
export default Portfolio;