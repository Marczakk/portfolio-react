import React from 'react'
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa"

function Banner() {
    return (
       <header className="header">
           <div className="container">
               <div className="row">
                   <div className="col-6">
                       <div className="header_content">
                        <div className="header_section">
                           
                             <h1>Kamil Marczak</h1>
                                <p>
                                    junior front-end developer
                                </p>

                                <ul className="header_ul">
                                    <li>
                                        <FaFacebookF />
                                    </li>
                                    <li>
                                        <FaLinkedin />
                                    </li>
                                    <li>
                                        <FaGithub />
                                    </li>
                            </ul>
                            </div>
                       </div>
                   </div>
                   <div className="col-6">
                       <div className="banner_img">
                           <img src="images/undraw_Freelancer_re_irh4.svg" alt="man"/>
                       </div>
                   </div>
               </div>
               {/* <div className="banner--fadeBottom" /> */}
           </div>
       </header>
    )
}

export default Banner
