import React from 'react';
import { positions } from '../Data/data';
import { useState,useEffect } from 'react';
import axios from 'axios';
function Positions() {
 let [allPositions,setAllPositions]=useState([]);
 useEffect(()=>{
  axios.get("http://localhost:3000/allPositions").then((res)=>{
    setAllPositions(res.data);
  })
 })
    return (
        <>
          <h3 className="title">Positions (2)</h3>
    
          <div className="order-table">
            <table>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg.</th>
              </tr>
              {allPositions.map((stock,index)=>{
                            const currVal=stock.price*stock.qty;
                            const isProf=currVal-stock.avg * stock.qty >=0.0;
                            const profClass=isProf? "profit" : "loss";
                            const dayClass =stock.isLoss? "loss" : "profit";
                            return(
                              <tr key={index}>
                            <td>{stock.product}</td>
                            <td>{stock.name}</td>
                            <td>{stock.qty}.</td>
                            <td>{stock.avg.toFixed(2)}</td>
                            <td>{stock.price.toFixed(2)}</td>
                            <td className={isProf}>{(currVal-(stock.avg*stock.qty)).toFixed(2)}</td>
                            <td className={dayClass}>{stock.day}</td>
                          </tr>
                            )
                          })}
            </table>
          </div>
        </>
      );
}

export default Positions;