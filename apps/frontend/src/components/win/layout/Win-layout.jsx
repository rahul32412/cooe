import React from "react";
import "./win-layout.css";
import { useAuth0 } from "@auth0/auth0-react";
import createContract from "../api/Contract";
const WinLayout = ({ timer }) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const handleContract = async (color) => {
    const token = await getAccessTokenSilently();
    createContract(
      {
        colorSelected: color,
        contractMoney: 150,
      },
      user,
      token
    );
  };
  return (
    <>
      <div className="top-bar">
        <p className="tobBar-header">Available Balance : ₹ 0.00</p>
        <div className="topBar-btn">
          <button className="reachargebtn">Reacharge</button>
          <button className="rulebtn">Read Rule</button>
        </div>
        <span>
          <i className=" refreshIcon fa-solid fa-arrows-rotate"></i>
        </span>
      </div>

      {/* Timer of the game */}

      <div className="timer">
        <span className="min">Min: {timer.min} </span>
        <span className="sec">Seconds: {timer.sec}</span>
      </div>

      {/* Contract controllers */}

      <div className="contract">
        <h3>Place contracts</h3>
        <ul className="contract-controllers">
          <li>
            <button onClick={() => handleContract("green")}>Green</button>
          </li>
          <li>
            <button onClick={() => handleContract("red")}>Red</button>
          </li>
          <li>
            <button onClick={() => handleContract("blue")}>Blue</button>
          </li>
        </ul>
      </div>

      <div className="record">
        <span className="trophyIcon">
          <i className="fa-sharp fa-solid fa-trophy"></i>
        </span>
        <p className="recordName">Parity Record</p>
      </div>

      {/* /// table */}
      <table>
        <thead>
          <tr>
            <th>Period</th>
            <th>Price</th>
            <th>Number</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>12344</td>
            <td>3</td>
            <td>
              <div className="point" style={{ backgroundColor: "red" }}></div>
            </td>
          </tr>

          <tr>
            <td>12345</td>
            <td>12344</td>
            <td>2</td>
            <td>
              <div className="point" style={{ backgroundColor: "green" }}></div>
            </td>
          </tr>

          <tr>
            <td>12345</td>
            <td>12344</td>
            <td>9</td>
            <td>
              <div className="point" style={{ backgroundColor: "green" }}></div>
            </td>
          </tr>

          <tr>
            <td>12345</td>
            <td>12344</td>
            <td>5</td>
            <td>
              <div className="point" style={{ backgroundColor: "red" }}></div>
            </td>
          </tr>

          <tr>
            <td>12345</td>
            <td>12344</td>
            <td>3</td>
            <td>
              <div
                className="point"
                style={{ backgroundColor: "violet" }}
              ></div>
            </td>
          </tr>

          <tr>
            <td>12345</td>
            <td>12344</td>
            <td>3</td>
            <td>
              <div className="point" style={{ backgroundColor: "red" }}></div>
            </td>
          </tr>

          <tr>
            <td>12345</td>
            <td>12344</td>
            <td>3</td>
            <td>
              <div className="point" style={{ backgroundColor: "green" }}></div>
            </td>
          </tr>

          <tr>
            <td>12345</td>
            <td>12344</td>
            <td>2</td>
            <td>
              <div className="point" style={{ backgroundColor: "red" }}></div>
            </td>
          </tr>
          <tr>
            <td>12345</td>
            <td>12344</td>
            <td>7</td>
            <td>
              <div className="point" style={{ backgroundColor: "green" }}></div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="historyRecord">
        <button className="historytbtn">
          <i className="fa-solid fa-list"></i> My Parity Record
        </button>
      </div>

      <div className="winfooter">
        <p className="winfooterTag">No data Available</p>
      </div>
    </>
  );
};

export default WinLayout;
