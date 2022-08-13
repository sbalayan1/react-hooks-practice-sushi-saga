import React, {useState} from "react";

function Sushi({sushi, eatSushi}) {
  const {name, img_url, price, eaten} = sushi

  let handleEatSushi = () =>  eaten != true ? eatSushi(sushi) : alert("Already eaten")

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
