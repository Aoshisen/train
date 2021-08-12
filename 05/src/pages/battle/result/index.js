import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faStar,faCodeBranch,faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default function Result() {
    return <div className='content'>
        <div className='list-item'>
            <div className='title'>Winner</div>
            <div className='img'>
                <img alt="" src={'https://github.com/github.png?size=200    '} />
                <div className='list-name'>
                   </div>
            </div>
            <div className="full-name">
            <FontAwesomeIcon icon={faUser} style={{color:"green",width:"20px" ,marginRight:"5px",marginLeft:"20%"}}/>
                
            </div>
        </div>
        <div className='list-item'>
            <div className='title'>Winner</div>
            <div className='img'>
                <img alt="" />
            </div>
        </div>
    </div>
}