import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFighterJet,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import "./index.css";

export default function Battle() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [user1Submit, setUser1] = useState(false);
  const [user2Submit, setUser2] = useState(false);
  const [userError1, setUserError1] = useState(false);
  const [userError2, setUserError2] = useState(false);
  const [user1Data, setUser1Data] = useState();
  const [user2Data, setUser2Data] = useState();

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
                color: "#FFBF74",
                width: "50%",
                height: "50%",
                marginTop: "20%",
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
                color: "#808080",
                width: "50%",
                height: "50%",
                marginTop: "20%",
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
                color: "#F4EA2A",
                width: "50%",
                height: "50%",
                marginTop: "20%",
              }}
            />
          </div>
        </div>
      </div>
      <div className="players">
        <div className="left">
          {!user1Submit ? (
            <>
              <p>player1</p>
              <input
                onChange={({ target }) => {
                  setPlayer1(target.value);
                }}
                value={player1}
                onKeyDown={({ keyCode }) => {
                  if (keyCode === 13) {
                    if (!player1.trim()) {
                      alert("此输入框为必填字段"); // eslint-disable-line no-alert
                      return;
                    }
                    fetch(`https://api.github.com/users/${player1}`)
                      .then((res) => res.json())
                      .then((res) => {
                        setUserError1(res.message);
                        setUser1Data(res);
                      });
                    setUser1(true);
                  }
                }}
              />{" "}
              <button
                disabled={!player1}
                onClick={() => {
                  fetch(`https://api.github.com/users/${player1}`)
                    .then((res) => res.json())
                    .then((res) => {
                      setUserError1(res.message);
                      setUser1Data(res);
                    });
                  setUser1(true);
                }}
                type="button"
              >
                submit
              </button>
            </>
          ) : (
            <div className="user">
              <img
                src={user1Data && user1Data.avatar_url}
                className="userAatar"
                alt=""
              />
              <p>{userError1 ? `${userError1}` : player1}</p>
              <div
                className="cancel"
                onClick={() => {
                  setUser1(false);
                }}
                aria-hidden="true"
              >
                X
              </div>
            </div>
          )}
        </div>
        <div className="right">
          {!user2Submit ? (
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
                      alert("此输入框为必填字段"); // eslint-disable-line no-alert
                      return;
                    }
                    fetch(`https://api.github.com/users/${player2}`)
                      .then((res) => res.json())
                      .then((res) => {
                        setUserError2(res.message);
                        setUser2Data(res);
                      });
                    setUser2(true);
                  }
                }}
              />{" "}
              <button
                disabled={!player2}
                onClick={() => {
                  fetch(`https://api.github.com/users/${player2}`)
                    .then((res) => res.json())
                    .then((res) => {
                      setUserError2(res.message);
                      setUser2Data(res);
                    });
                  setUser2(true);
                }}
                type="button"
              >
                submit
              </button>
            </>
          ) : (
            <div className="user">
              <img
                src={user2Data && user2Data.avatar_url}
                className="userAatar"
                alt=""
              />
              <p>{userError2 ? `${userError2}` : player2}</p>
              <div
                className="cancel"
                onClick={() => {
                  setUser2(false);
                }}
                aria-hidden="true"
              >
                X
              </div>
            </div>
          )}
        </div>
      </div>
      {user1Submit && user2Submit && !userError1 && !userError2 ? (
        <div className="winner">
          <button type="button">
            <Link
              to={{
                pathname: "/result",
                search: `?player1=${player1}&player2=${player2}`,
              }}
            >
              Battle
            </Link>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
