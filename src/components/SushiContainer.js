import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({sushi, eatSushi}) {
  const [index, setIndex] = useState(4)

  let updateIndex = () => {
    index >= sushi.length ? setIndex(4) : setIndex(index+4)
  }

  let renderSushi = sushi.slice(index-4, index).map(s => 
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
