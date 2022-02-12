import { useState, Fragment } from "react";
import classes from "./index.module.css";
import Head from "next/head";
import { CSSTransition } from "react-transition-group";

const refBoard = {
  box1: "",
  box2: "",
  box3: "",
  box4: "",
  box5: "",
  box6: "",
  box7: "",
  box8: "",
  box9: "",
};

const KickTacToePage = () => {
  const [turn, setTurn] = useState("");

  const [board, setboard] = useState(refBoard);

  const [header, setHeader] = useState("Start Playing Now!");

  const setMarker = (marker) => {
    setTurn(marker);
    console.log(marker);
  };

  const checkCombinations = (board, check) => {
    return (
      board.box1 + board.box2 + board.box3 === check ||
      board.box4 + board.box5 + board.box6 === check ||
      board.box7 + board.box8 + board.box9 === check ||
      board.box1 + board.box4 + board.box7 === check ||
      board.box2 + board.box5 + board.box8 === check ||
      board.box3 + board.box6 + board.box9 === check ||
      board.box1 + board.box5 + board.box9 === check ||
      board.box3 + board.box5 + board.box7 === check
    );
  };

  const checkWin = (board, check) => {
    if (checkCombinations(board, check)) {
      const winner = check.charAt(0);
      setHeader(`Player ${winner} wins!`);
      setboard({
        box1: winner,
        box2: winner,
        box3: winner,
        box4: winner,
        box5: winner,
        box6: winner,
        box7: winner,
        box8: winner,
        box9: winner,
      });
    }
  };

  const onClickHandler = (box) => {
    if (turn === "X") {
      const currentBoard = board;
      if (currentBoard[box] !== "") {
        return;
      }
      currentBoard[box] = "X";
      setboard(currentBoard);
      checkWin(currentBoard, "XXX");
      setTurn("O");
    } else {
      const currentBoard = board;
      if (currentBoard[box] !== "") {
        return;
      }
      currentBoard[box] = "O";
      setboard(currentBoard);
      checkWin(currentBoard, "OOO");
      setTurn("X");
    }
  };

  const clearHandler = () => {
    const refBoard = {
      box1: "",
      box2: "",
      box3: "",
      box4: "",
      box5: "",
      box6: "",
      box7: "",
      box8: "",
      box9: "",
    };
    setboard(refBoard);
    setTurn("");
    setHeader("Start Playing Now!");
  };

  return (
    <Fragment>
      <Head>
        <title>Kick-Tac-Toe</title>
        <meta
          name="description"
          content="Play Tic Tac Toe with friends and family"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.freeiconspng.com/uploads/tool-icon-20.png"
        />
      </Head>
      <div className={classes.container}>
        <h2>{header}</h2>
        <CSSTransition
          in={!turn}
          timeout={350}
          classNames="item"
          mountOnEnter
          unmountOnExit
        >
          <div className={classes.input_box}>
            <label>Select Marker</label>
            <div className={classes.button_container}>
              <button onClick={setMarker.bind(null, "X")}>X</button>
              <button onClick={setMarker.bind(null, "O")}>O</button>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={turn}
          timeout={350}
          classNames="item"
          mountOnEnter
          unmountOnExit
        >
          <div className={classes.playbox}>
            <table className={classes.game}>
              <tbody>
                <tr>
                  <td onClick={onClickHandler.bind(null, "box1")}>
                    {board.box1}
                  </td>
                  <td onClick={onClickHandler.bind(null, "box2")}>
                    {board.box2}
                  </td>
                  <td onClick={onClickHandler.bind(null, "box3")}>
                    {board.box3}
                  </td>
                </tr>
                <tr>
                  <td onClick={onClickHandler.bind(null, "box4")}>
                    {board.box4}
                  </td>
                  <td onClick={onClickHandler.bind(null, "box5")}>
                    {board.box5}
                  </td>
                  <td onClick={onClickHandler.bind(null, "box6")}>
                    {board.box6}
                  </td>
                </tr>
                <tr>
                  <td onClick={onClickHandler.bind(null, "box7")}>
                    {board.box7}
                  </td>
                  <td onClick={onClickHandler.bind(null, "box8")}>
                    {board.box8}
                  </td>
                  <td onClick={onClickHandler.bind(null, "box9")}>
                    {board.box9}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CSSTransition>
        <CSSTransition
          in={turn}
          timeout={500}
          classNames="item"
          mountOnEnter
          unmountOnExit
        >
          <div className={classes.actions}>
            <button onClick={clearHandler}>Reset</button>
          </div>
        </CSSTransition>
      </div>
    </Fragment>
  );
};

export default KickTacToePage;
