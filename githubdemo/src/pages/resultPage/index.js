import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faLayerGroup, faUserPlus, faCode } from '@fortawesome/free-solid-svg-icons'

import { useLocation } from "react-router-dom"
import "./index.css"
import qs from "qs"
const ResultPage = () => {
    let { search } = useLocation();
    let { player1, player2 } = qs.parse(search.substr(1))
    let [player1Data, setPlayer1Data] = useState()
    let [player2Data, setPlayer2Data] = useState()
    useEffect(() => {
        fetch(`https://api.github.com/users/${player1}`).then(res => res.json()).then(res => setPlayer1Data(res))
        fetch(`https://api.github.com/users/${player2}`).then(res => res.json()).then(res => setPlayer2Data(res))
    }, [])
    let calculateWinner = (player1Data, player2Data) => {
        console.log("我竟来了");
        if (player1Data['public_repos'] > player2Data['public_repos']) {
            return {
                winner: player1Data,
                loser: player2Data
            }
        }
        else {
            return {
                winner: player2Data,
                loser: player1Data
            }
        }
    }
    let result = (player1Data && player2Data) && calculateWinner(player1Data, player2Data)
    return <>
        <div className='resultGroup'>
            <div className='result-item'>
                <h2>Winner</h2>
                <div className='img'>
                    <img alt="" src={result && `https://github.com/${result.winner.login}.png?size=200`} />
                </div>
                <h3>scores:{result && result.winner['public_repos']}</h3>
                <h2 style={{ color: "#1890FF" }}>{result && result.winner.login}</h2>
                <div>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    {result && result.winner.location}
                </div>
                <div>
                    <FontAwesomeIcon icon={faLayerGroup} />
                    {result && result.winner['public_gists']}
                </div>
                <div>
                    <FontAwesomeIcon icon={faUserPlus} />
                    {result && result.winner['followers']}
                </div>
                <div>
                    <FontAwesomeIcon icon={faCode} />
                    {result && result.winner['public_repos']}
                </div>
            </div>
            <div className='result-item'>
                <h2>Loser</h2>
                <div className='img'>
                    <img alt="" src={result && `https://github.com/${result.loser.login}.png?size=200`} />
                </div>
                <h3>scores:{result && result.loser['public_repos']}</h3>
                <h2 style={{ color: "#1890FF" }}>{result && result.loser.login}</h2>
                <div>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    {result && result.loser.location}
                </div>
                <div>
                    <FontAwesomeIcon icon={faLayerGroup} />
                    {result && result.loser['public_gists']}
                </div>
                <div>
                    <FontAwesomeIcon icon={faUserPlus} />
                    {result && result.loser['followers']}
                </div>
                <div>
                    <FontAwesomeIcon icon={faCode} />
                    {result && result.loser['public_repos']}
                </div>
            </div>
        </div>
        <div className='reset'>
            <button className="resetBtn">
                <Link to='/battle'>Reset</Link>
            </button>
        </div>
    </>
}
export default ResultPage