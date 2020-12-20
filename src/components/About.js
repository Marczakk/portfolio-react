import React from 'react'
import { FaRegHandPointDown } from 'react-icons/fa'

function About() {
    return (
        <div class="about">
            <div class="container">
                <div class="services_header">
                    <h3 class="mainHeader">
                        About me <FaRegHandPointDown value={{ className : "Hand" }} />
                    </h3>
                    <div class="line"></div>
                    <p class="mainContent">
                     I am looking for a job in IT as a junior front-end developer. I know technologies such as HTML5, CSS3 language describing the look of the page, RWD - technology for creating responsive websites very well. I've also got basic knowledge of MySQL and Photoshop. At this moment, I put the greatest emphasis on developing in such technologies like JavaScript, Bootstrap and React.
                    </p>
                </div>
            </div>
            <div class="flow"></div>
        </div>
        
    )
}

export default About
