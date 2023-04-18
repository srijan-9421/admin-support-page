import React, { Component } from 'react'
import finzlogo from './finzlogo.png';
import { Navigate, useNavigate } from 'react-router-dom';

const data = [

  { SNo: "1", name: "Hritik Roshan", accountid: " 190904635 ", balance: "Credit card not working" },

  { SNo: "2", name: "Henry Beiber", accountid: " 194637684 ", balance: "Server issue" },

  { SNo: "3", name: "Dhikshita Chaturvedi", accountid: "74652637 ", balance: "Money not deposited" },

  { SNo: "4", name: "Adii Raj Srivastava", accountid: "73874362", balance: "Forgot ATM pin " },

  { SNo: "5", name: "Liu Jong", accountid: "23625245", balance: "Lost credit card" },

  { SNo: "6", name: "Shah rukh khan", accountid: "83872634", balance: "International transcations not working" },

  { SNo: "7", name: "Jim Mortin", accountid: "738723421", balance: "Cannot avail loan" },

  { SNo: "8", name: "Salman Khan", accountid: "27832452", balance: "Upi payment not working" },

  { SNo: "9", name: "Rishabh Agarwal", accountid: "102394736", balance: "Fraud alert" },

  { SNo: "10", name: "Mahek Kumar", accountid: "920932464", balance: "lost credit card" },

]

function Tabledata() {
  const navigate = useNavigate();
  function replyclick() {
    navigate("/reply")
  }
  return (
    <div className='container'>

      <div class="header">{
        <header className="App-header">
          <img src={finzlogo} className="App-logo" alt="finzlogo" />
        </header>
      }
      </div>
      <div className="App">

        <table>

          <tr>

            <th>SNo</th>

            <th>name</th>

            <th>DATE</th>

            <th>Compaint</th>

            <th>Respond to Query</th>

          </tr>

          {data.map((val, key) => {

            return (

              <tr key={key}>

                <td>{val.SNo}</td>

                <td>{val.name}</td>

                <td>{val.accountid}</td>

                <td>{val.balance}</td>

                <button onClick={replyclick} type="submit">Reply</button>

                <button>Defer</button>

              </tr>

            )

          })}

        </table>

      </div>

    </div>

  );

}

export default Tabledata