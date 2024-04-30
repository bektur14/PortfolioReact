import React from 'react'
import "./style.css"
import gitHub from "../../img/icons/gitHub-black.svg"

function GitHubBtn({link}) {
    return (
        <a href={link} rel='noreferrer' target='_blank' className='btn-outline'>
            <img src={gitHub} alt="" />
            GitHub repo
        </a>
    )
}

export default GitHubBtn