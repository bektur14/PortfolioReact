import React from 'react'
import "./style.css"

import vk from "../../img/icons/vk.svg"
import instagram from "../../img/icons/instagram.svg"
import twitter from "../../img/icons/twitter.svg"
import gitHub from "../../img/icons/gitHub.svg"
import linkedIn from "../../img/icons/linkedIn.svg"

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            
                                <img src={vk} alt="Link" />
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={instagram} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                          
                                <img src={twitter} alt="Link" />
                        </li>
                        <li className="social__item">
                            
                                <img src={gitHub} alt="Link" />
                        </li>
                        <li className="social__item">
                            
                                <img src={linkedIn} alt="Link" />
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2022 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer