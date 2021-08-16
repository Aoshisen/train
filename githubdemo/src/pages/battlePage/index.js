import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFighterJet, faTrophy } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import './index.css';

export default function Battle() {
  const [player1, setPlayer1] = useState(sessionStorage.getItem('player1') || '');
  const [player2, setPlayer2] = useState(sessionStorage.getItem('player2') || '');
  const [user1Submit, setUser1] = useState(false);
  const [user2Submit, setUser2] = useState(false);
  useEffect(() => () => {
    console.log('Battle页面卸载了');
  }, []);

  return (
    <div className="instructions">
      <h1>instruction</h1>
      <div className="content">
        <div className="content-item">
          <div className="name">Enter Two Github Users </div>
          <div className="icon">
            <FontAwesomeIcon
              icon={faUser}
              style={{
                color: '#FFBF74', width: '50%', height: '50%', marginTop: '20%',
              }}
            />
          </div>
        </div>
        <div className="content-item">
          <div className="name">Battle </div>
          <div className="icon">
            <FontAwesomeIcon
              icon={faFighterJet}
              style={{
                color: '#808080', width: '50%', height: '50%', marginTop: '20%',
              }}
            />
          </div>
        </div>
        <div className="content-item">
          <div className="name">see The Winner</div>
          <div className="icon">
            <FontAwesomeIcon
              icon={faTrophy}
              style={{
                color: '#F4EA2A', width: '50%', height: '50%', marginTop: '20%',
              }}
            />
          </div>
        </div>
      </div>
      <div className="players">
        <div className="left">
          {
                    !user1Submit
                      ? (
                        <>
                          <p>player1</p>
                          <input
                            onChange={({ target }) => {
                              setPlayer1(target.value);
                            }}
                            value={player1}
                            onKeyDown={(({ keyCode }) => {
                              if (!player1.trim()) {
                                alert('此输入框为必填字段');
                                return;
                              }
                              if (keyCode === 13) {
                                sessionStorage.setItem('player1', player1);
                                setUser1(true);
                              }
                            })}
                          /> <button
                            disabled={!player1}
                            onClick={() => {
                              sessionStorage.setItem('player1', player1);
                              setUser1(true);
                            }}
                            type="button"
                          >submit
                             </button>

                        </>
                      )
                      : (
                        <div className="user">
                          <img src={`https://github.com/${player1}.png?size=200`} className="userAatar" alt=""/>
                          <div
                            className="cancel"
                            onClick={() => {
                              setUser1(false);
                            }}
                            aria-hidden="true"
                          >X
                          </div>
                        </div>
                      )
}

        </div>
        <div className="right">
          {
                    !user2Submit
                      ? (
                        <>
                          <p>player2</p>
                          <input
                            onChange={({ target }) => {
                              setPlayer2(target.value);
                            }}
                            value={player2}
                            onKeyDown={({ keyCode }) => {
                              if (keyCode === 13) {
                                if (!player2.trim()) {
                                  alert('此输入框为必填字段');
                                  return;
                                }
                                sessionStorage.setItem('player2', player2);
                                setUser2(true);
                              }
                            }}
                          /> <button
                            disabled={!player2}
                            onClick={() => {
                              sessionStorage.setItem('player2', player2);
                              setUser2(true);
                            }}
                            type="button"
                          >submit
                             </button>

                        </>
                      )
                      : (
                        <div className="user">
                          <img src={`https://github.com/${player2}.png?size=200`} className="userAvatar" alt="请求中" />
                          <div
                            className="cancel"
                            onClick={() => {
                              setUser2(false);
                            }}
                            aria-hidden="true"
                          >X
                          </div>
                        </div>
                      )
}
        </div>
      </div>
      {
            user1Submit && user2Submit
              ? (
                <div className="winner">
                  <button type="button">
                    <Link to={{
                      pathname: '/result',
                      search: `?player1=${player1}&player2=${player2}`,
                    }}
                    >
                      Battle
                    </Link>
                  </button>
                </div>
              )
              : ''
        }
    </div>
  );
}
