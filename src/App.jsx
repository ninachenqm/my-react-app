import { useState } from "react";

function Square() {

  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>

  );
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square value={setSquares[0]} />
        <Square value={setSquares[1]} />
        <Square value={setSquares[2]} />
      </div>
      <div className="board-row">
        <Square value={setSquares[3]} />
        <Square value={setSquares[4]} />
        <Square value={setSquares[5]} />
      </div>
      <div className="board-row">
        <Square value={setSquares[6]} />
        <Square value={setSquares[7]} />
        <Square value={setSquares[8]} />
      </div>
    </>
  );


}