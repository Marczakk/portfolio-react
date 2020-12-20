import React, { useState } from 'react'




function Navbar() {
    
    const [showLinks, setShowLinks] = useState(false);
    return (
        <div className="Navbar">
            <div className="rightSide">
            
                <div className="logo">
                    <h3>Kamil Marczak</h3>
                </div>
             
            </div>
            <div className="leftSide">
               <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/skills">Skills</a>
                    <a href="/contact">Contact</a>
                </div>        
                <div className="toggle" onClick={() => setShowLinks(!showLinks)}><i className="fas fa-bars"></i></div>
               
            </div>
        </div>
    )
}

export default Navbar
