import "./table.css";
import React, { useEffect, useState } from "react";
import { getRandomValue } from "../../helpers/timerData";
export default function WidgetLg() {
  const [randomValue,setRandomValue]=useState(Array.from(Array(4).keys()).map(i=>getRandomValue()))
  useEffect(() => {
    const timer = setTimeout(() => {
      setRandomValue(Array.from(Array(4).keys()).map(i=>getRandomValue()));
    }, 3000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="/assets/images/img1.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">David</span>
          </td>
          <td className="widgetLgDate">15 mars 2022</td>
          <td className="widgetLgAmount">${randomValue[0]}</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="/assets/images/img3.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Lidya</span>
          </td>
          <td className="widgetLgDate">15 mars 2022</td>
          <td className="widgetLgAmount">${randomValue[1]}</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="/assets/images/img2.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jack</span>
          </td>
          <td className="widgetLgDate">15 mars 2022</td>
          <td className="widgetLgAmount">${randomValue[2]}</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="/assets/images/img5.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Tom</span>
          </td>
          <td className="widgetLgDate">14 mars 2022</td>
          <td className="widgetLgAmount">${randomValue[3]}</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
  

}
const Button = ({ type }) => {
  return <button className={"widgetLgButton " + type}>{type}</button>;
};