import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({sushi, eatSushi}) {
  const [index, setIndex] = useState(0)

  let updateIndex = () => setIndex((index+4) % sushi.length)

  let renderSushi = sushi.slice(index, index+4).map(s => 
    <Sushi key={s.id} sushi={s} eatSushi={eatSushi}/>
  )

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton updateIndex={updateIndex} />
    </div>
  );
}

export default SushiContainer;
