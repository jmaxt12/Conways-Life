import React, { Component } from "react";
import Cell from "./Cell";

import "./Grid.css";
import { corners, stripes, half, plus } from "./presets";

class Grid extends Component {
  state = {
    cells: [],
    interval: 100,
    isRunning: false,
    CELL_SIZE: 10,
    WIDTH: 500,
    HEIGHT: 500,
    counter: 0
  };

  rows = this.state.HEIGHT / this.state.CELL_SIZE;
  cols = this.state.WIDTH / this.state.CELL_SIZE;
  board = this.makeEmptyBoard();

  // Creates an empty board
  makeEmptyBoard() {
    let board = [];

    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false;
      }
    }
    return board;
  }

  // Create cells from this.board
  makeCells() {
    let cells = [];

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells.push({ x, y });
        }
      }
    }
    return cells;
  }

  getElementOffset() {
    // rect is a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height
    const rect = this.boardRef.getBoundingClientRect();
    // Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
    const doc = document.documentElement;
    console.log("doc:", doc);
    console.log("rect.left=", rect.left, rect.top);
    console.log(doc.clientTop);
    // The read-only Window property pageYOffset is an alias for scrollY; as such, it returns the number of pixels the document is currently scrolled along the vertical axis (that is, up or down) with a value of 0.0, indicating that the top edge of the Document is currently aligned with the top edge of the window's content area.
    return {
      x: rect.left + window.pageXOffset - doc.clientLeft,
      y: rect.top + window.pageYOffset - doc.clientTop
    };
  }

  handleClick = event => {
    const elemOffset = this.getElementOffset();
    const offsetX = event.clientX - elemOffset.x;
    const offsetY = event.clientY - elemOffset.y;
    const x = Math.floor(offsetX / this.state.CELL_SIZE);
    const y = Math.floor(offsetY / this.state.CELL_SIZE);
    console.log(x, y);

    if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      this.board[y][x] = !this.board[y][x];
    }

    this.setState({
      cells: this.makeCells()
    });
  };

  runGame = () => {
    this.setState({ isRunning: true });
    this.runIteration();
  };

  stopGame = () => {
    this.setState({ isRunning: false });
    if (this.timeoutHandler) {
      window.clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  };

  handleIntervalChange = event => {
    this.setState({ interval: event.target.value });
  };

  // handleRandomTEST = () => {
  //   this.handleClear()
  //   smile.forEach(item => {
  //     this.board[item.y][item.x] = true;
  //   });
  //   this.setState({
  //     counter: 0,
  //     cells: this.makeCells()
  //   });
  // };

  handleClear = () => {
    this.board = this.makeEmptyBoard();
    this.setState({
      cells: this.makeCells(),
      counter: 0
    });
    this.stopGame();
  };

  handlePresetCorners = () => {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.board[y][x] = corners[y][x];
      }
      this.stopGame();
    }
    this.setState({
      cells: this.makeCells(),
      counter: 0
    });
  };

  handlePresetStripes = () => {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.board[y][x] = stripes[y][x];
      }
      this.stopGame();
    }
    this.setState({
      cells: this.makeCells(),
      counter: 0
    });
  };

  handlePresetHalf = () => {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.board[y][x] = half[y][x];
      }
      this.stopGame();
    }
    this.setState({
      cells: this.makeCells(),
      counter: 0
    });
  };

  handlePresetPlus = () => {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.board[y][x] = plus[y][x];
      }
      this.stopGame();
    }
    this.setState({
      cells: this.makeCells(),
      counter: 0
    });
  };

  handleRandom = () => {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.board[y][x] = Math.random() >= 0.5;
        console.log(this.board[y][x]);
      }
      this.stopGame();
    }
    this.setState({
      counter: 0,
      cells: this.makeCells()
    });
  };

  runIteration() {
    console.log("running iteration");
    let newBoard = this.makeEmptyBoard();
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let neighbors = this.calculateNeighbors(this.board, x, y);
        /* Checks to see if cell exists */
        if (this.board[y][x]) {
          /* Satisfies 2nd rule of Conway's Game of Life */
          if (neighbors === 2 || neighbors === 3) {
            /* This cell lives to the next generation */
            newBoard[y][x] = true;
          } else {
            newBoard[y][x] = false;
          }
        } else {
          if (!this.board[y][x] && neighbors === 3) {
            newBoard[y][x] = true;
          }
        }
      }
    }
    this.board = newBoard;
    console.log("Generation: ", this.state.counter);
    this.setState((prevState, { counter }) => ({
      cells: this.makeCells(),
      counter: prevState.counter + 1
    }));
    this.timeoutHandler = window.setTimeout(() => {
      this.runIteration();
    }, this.state.interval);
  }

  calculateNeighbors(board, x, y) {
    let neighbors = 0;
    const dirs = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1]
    ];
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i];
      let y1 = y + dir[0];
      let x1 = x + dir[1];

      if (
        x1 >= 0 &&
        x1 < this.cols &&
        y1 >= 0 &&
        y1 < this.rows &&
        board[y1][x1]
      ) {
        neighbors++;
      }
    }

    return neighbors;
  }

  render() {
    const {
      cells,
      interval,
      isRunning,
      CELL_SIZE,
      WIDTH,
      HEIGHT,
      counter
    } = this.state;
    return (
      <div>
        <h2>Generation: {counter}</h2>
        <br />
        <div
          className="Board"
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
          }}
          onClick={this.handleClick}
          ref={n => {
            this.boardRef = n;
          }}
        >
          {cells.map(cell => (
            <Cell
              CELL_SIZE={CELL_SIZE}
              x={cell.x}
              y={cell.y}
              key={Math.floor(Math.random() * Math.floor(100000000))}
            />
          ))}
        </div>
        <div className="controls">
          <br />
          Update every
          <input
            value={interval}
            onChange={this.handleIntervalChange}
          /> msec{" "}
          {isRunning ? (
            <button className="button" onClick={this.stopGame}>
              Stop
            </button>
          ) : (
            <button className="button" onClick={this.runGame}>
              Play
            </button>
          )}{" "}
          <button className="button" onClick={this.handleRandom}>
            Random
          </button>{" "}
          <button className="button" onClick={this.handleClear}>
            Clear
          </button>{" "}
          <br />
          <br />
          PRESETS:{" "}
          <button className="button" onClick={this.handlePresetCorners}>
            Corners
          </button>{" "}
          <button className="button" onClick={this.handlePresetStripes}>
            Stripes
          </button>{" "}
          <button className="button" onClick={this.handlePresetHalf}>
            Half
          </button>{" "}
          <button className="button" onClick={this.handlePresetPlus}>
            Plus
          </button>
        </div>
      </div>
    );
  }
}

export default Grid;
