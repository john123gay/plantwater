import React from "react";
import './Body.css';

const Body = (props) => {
  return (
    <div className="container-fluid">
        <div className="col">
          <h1 className="pull-left header">Plant Water</h1>
          <div className="pull-right text-center">
          <h3>NeXt Watering</h3>
          <span>{props.time}</span>
          <span><p>status bar</p></span>
          </div>
      </div>
      <ul>
        <li><span  onClick={() => props.buzz()} className="col-sm"><i class="fas fa-water water"></i></span></li>
        <li><i class="fas fa-signal graph"></i></li>
      </ul>
    </div>
  );
};

export default Body;