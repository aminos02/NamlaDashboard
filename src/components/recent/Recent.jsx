import React from "react";
import "./recent.css";
function Recent() {
  return (
    <div className="recentCustomers">
      <h2 className="title">Recent Users</h2>

      <table>
        <tbody>
          <tr>
            <td width="60px">
              <div className="imgBx">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/img1.jpg"}
                  alt="img1"
                />
              </div>
            </td>
            <td>
              <h4>
                David <br />
                <span>Italy</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/img2.jpg"}
                  alt=""
                />
              </div>
            </td>
            <td>
              <h4>
                Jack <br />
                <span>Algeria</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/img3.jpg"}
                  alt=""
                />
              </div>
            </td>
            <td>
              <h4>
                Lidya <br />
                <span>France</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/img4.jpg"}
                  alt=""
                />
              </div>
            </td>
            <td>
              <h4>
                Lola <br />
                <span>Germany</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/img5.jpg"}
                  alt=""
                />
              </div>
            </td>
            <td>
              <h4>
                Tom <br />
                <span>Italy</span>
              </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Recent;
