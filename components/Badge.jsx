import React from "react";

const Badge = ({ year }) => {
  return (
    <div>
      {/* <span class="bg1 text-white break-normal text-sm font-medium mr-2 px-2.5 py-1 rounded "> */}
      <span class="badge whitespace-nowrap ">{year}</span>
    </div>
  );
};

export default Badge;
