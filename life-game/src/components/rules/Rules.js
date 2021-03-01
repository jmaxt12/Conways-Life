import React from "react";

import './Rules.css'

const Rules = () => {
  return (
    <div>
      <h2>Rules:</h2>
      <ol className='ruleList'>
        <li>
          1. Any live cell with fewer than two live neighbors dies, as if caused by
          under population.
        </li>
        <br />
        <li>
          2. Any live cell with two or three live neighbors lives on to the next
          generation.
        </li>
        <br />
        <li>
          3. Any live cell with more than three live neighbors dies, as if by
          overpopulation.
        </li>
        <br />
        <li>
          4. Any dead cell with exactly three live neighbors becomes a live cell,
          as if by reproduction.
        </li>
      </ol>
      <br/><h2>Making the game:</h2>
      <div className='description'>
      <p> Creating Conway’s game of life was fairly tricky at first. To understand the problem, I did some googling to see what it was supposed to look like with a grid and animations. I then needed to understand the rules by why cells of the grid would either appear or disappear. Essentially there were four rules that decided what would happen upon starting the game of like that are listed above. Seeing these and understanding them helped me realize where to begin in my planning.</p>
      <p> My plan consisted of a few steps. First, I needed to create a grid for the game to be played on that was easy to use. Second, the rules needed to be made for the game to work. Last, I needed to make buttons to play out the game like start, stop, clear and preset images to showcase the game.</p>
      <p> Carrying out the plan was a little rough at times. At first, to create the grid, I thought I would try to do it with canvas, but as I searched the web on how to use it, things seemed pretty tricky/confusing. I decided that CSS might be an easier option/something that I could wrap my head around a little better. Luckily, I was able to find a resource online that walked through the steps of how to create the grid with CSS that I was able to follow. Understanding the code took a little bit of time and discussion amongst some peers. In short, I created a board, then cells within the board to click on. </p>
      <p> After the board and cells were created with CSS and JavaScript, writing the algorithm for the problem was the next step. Each cell needed to know who their neighbor’s were and should have eight with diagonals being neighbors as well. Once the neighbors were figured out, writing if statements helped satisfy the rules of the game.</p>
      <p> Many more functions were written for buttons to clear, randomize, start, and stop the game. As I had everything working for the most part, I saw that there were certain things that did not make the most sense. For instance, when I would click randomize when the game was already running, it would just continue with the game and new board. I wanted the game to stop when I changed the face of the board so you have to click play again. There were many things similar to this that I changed around to make the game as user friendly as possible! </p>
      </div>
    </div>
  );
};

export default Rules;
