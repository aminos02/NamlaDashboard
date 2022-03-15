import "./featuredInfo.css";
import React from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo({
  memory,
  cpu,
  edgeConnected,
  nbDevices,
}) {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Memory Usage</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{memory}%</span>
          <span className="featuredMoneyRate">
            -1.5% <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cpu Usage</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{cpu}%</span>
          <span className="featuredMoneyRate">
            -3% <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Edge Connected</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{edgeConnected}</span>
          <span className="featuredMoneyRate">
            +2 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total nb of Devices</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{nbDevices + 100}</span>
          <span className="featuredMoneyRate">
            +5 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
