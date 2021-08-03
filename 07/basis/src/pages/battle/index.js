import React from "react"
export default function Battle(){
    return <div className="instructions">
        <h1>instruction</h1>
        <div className="content">
            <div className="content-item">
                <div className='name'>Enter Two Github Users </div>
                <img alt='' src='' />
            </div>
            <div className="content-item">
                <div className='name'>Battle </div>
                <img alt='' src='' />
            </div>
            <div className="content-item">
                <div className='name'>see The Winner</div>
                <img alt='' src='' />
            </div>
        </div>
        <div className='players'>
            <div>
                <p>player1</p>
                <input></input> <button>submit</button>
            </div>
            <div>
                <p>player1</p>
                <input></input> <button>submit</button>
            </div>
        </div>
    </div>
}