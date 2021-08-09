import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faFighterJet,faTrophy} from '@fortawesome/free-solid-svg-icons'

import "./index.css"
export default function Battle(){
    let [player1,setPlayer1]=useState('')
    let [player2,setPlayer2]=useState('')

    return <div className="instructions">
        <h1>instruction</h1>
        <div className="content">
            <div className="content-item">
                <div className='name'>Enter Two Github Users </div>
                <div className="icon">
                <FontAwesomeIcon icon={faUser} style={{color:"#FFBF74",width:"50%",height:"50%",marginTop:"20%",}}/>
                </div>
            </div>
            <div className="content-item">
                <div className='name'>Battle </div>
                
                <div className="icon">
                <FontAwesomeIcon icon={faFighterJet} style={{color:"#808080",width:"50%",height:"50%",marginTop:"20%"}}/>
                </div>
            </div>
            <div className="content-item">
                <div className='name'>see The Winner</div>
                <div className="icon">
                <FontAwesomeIcon icon={faTrophy} style={{color:"#F4EA2A",width:"50%",height:"50%",marginTop:"20%"}}/>
                </div>
            </div>
        </div>
        <div className='players'>
            <div>
                <p>player1</p>
                <input onChange={({target})=>{
                    setPlayer1(target.value)
                    console.log(player1);
                }} value={player1}></input> <button disabled={!player1} onClick={()=>{
                    setPlayer1('')
                }}>submit</button>
            </div>
            <div>
                <p>player1</p>
                <input  onChange={({target})=>{
                    setPlayer2(target.value)
                    console.log(player1);
                }} value={player2}></input> <button disabled={!player2} onClick={()=>{
                    setPlayer2("")
                }}>submit</button>
            </div>
        </div>
    </div>
}