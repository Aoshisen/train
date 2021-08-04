import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faStar,faCodeBranch,faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import "./index.css"


class ListItem extends Component {
    render() {
        // console.log(this.props);
        let { id, forks, open_issues, stargazers_count, owner: { avatar_url, login } } = this.props.data
        return <div className='list-item'>
            <div className='title'>#{id + 1}</div>
            <div className='img'>
                <img alt="" src={avatar_url} />
                <div className='list-name'>
                    {login}</div>
            </div>
            <div className="full-name">
            <FontAwesomeIcon icon={faUser} style={{color:"green",width:"20px" ,marginRight:"5px",marginLeft:"20%"}}/>
                {login}
            </div>
            <div className='star'>
            <FontAwesomeIcon icon={faStar} style={{color:"yellow",width:"20px" ,marginRight:"5px",marginLeft:"20%"}}/>
                {stargazers_count} stars</div>
            <div className='branch'>
            <FontAwesomeIcon icon={faCodeBranch} style={{color:"blue",width:"20px" ,marginRight:"5px",marginLeft:"20%"}}/>
                {forks} forks</div>
            <div className='issue'>
            <FontAwesomeIcon icon={faExclamationTriangle} style={{color:"red",width:"20px" ,marginRight:"5px",marginLeft:"20%"}}/>
                {open_issues}open issues</div>
        </div>
    }
}
export default ListItem