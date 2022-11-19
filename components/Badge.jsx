import React from "react";

const Badge = ({ year }) => {
  return (
    <div>
      {/* <span className="bg1 text-white break-normal text-sm font-medium mr-2 px-2.5 py-1 rounded "> */}
      <span className="badge whitespace-nowrap ">{year}</span>
    </div>
  );
};

export default Badge;
