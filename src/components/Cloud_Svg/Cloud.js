import React from "react";
import "./Cloud.css";

const Cloud = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.minWidth}
      height={props.minHeight}
      viewBox="0 0 41.287 37.936"
      fill="#30D2FF"
      className="cloud-mobile"
    >
      <defs></defs>
      <g
        id="Group_31"
        data-name="Group 31"
        transform="translate(-17.491 -11.5)"
      >
        <path
          id="cloud"
          className="cls-1"
          d="M33.453,15.19a5.405,5.405,0,0,0-1.551.229,9.827,9.827,0,0,0-3.377-6.568A4.59,4.59,0,0,0,22.943,8.7C21.334,2.155,16.436-1.225,12,1.152S5.282,10.763,6.891,17.309C3.009,17.49-.059,22.236,0,27.973S3.22,38.318,7.105,38.327H33.453c4.326,0,7.833-5.179,7.833-11.569S37.779,15.19,33.453,15.19Zm0,0"
          transform="translate(17.492 11.108)"
        />
      </g>
    </svg>
  );
};

export default Cloud;
