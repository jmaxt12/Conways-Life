How-to Guide (how I made the application)

Creating Conway’s game of life was fairly tricky at first. To understand the problem, I did some googling to see what it was supposed to look like with a grid and animations. I then needed to understand the rules by why cells of the grid would either appear or disappear. Essentially there were four rules that decided what would happen upon starting the game of like that are listed above. Seeing these and understanding them helped me realize where to begin in my planning.
My plan consisted of a few steps. First, I needed to create a grid for the game to be played on that was easy to use. Second, the rules needed to be made for the game to work. Last, I needed to make buttons to play out the game like start, stop, clear and preset images to showcase the game.
Carrying out the plan was a little rough at times. At first, to create the grid, I thought I would try to do it with canvas, but as I searched the web on how to use it, things seemed pretty tricky/confusing. I decided that CSS might be an easier option/something that I could wrap my head around a little better. Luckily, I was able to find a resource online that walked through the steps of how to create the grid with CSS that I was able to follow. Understanding the code took a little bit of time and discussion amongst some peers. In short, I created a board, then cells within the board to click on.
After the board and cells were created with CSS and JavaScript, writing the algorithm for the problem was the next step. Each cell needed to know who their neighbor’s were and should have eight with diagonals being neighbors as well. Once the neighbors were figured out, writing if statements helped satisfy the rules of the game.
Many more functions were written for buttons to clear, randomize, start, and stop the game. As I had everything working for the most part, I saw that there were certain things that did not make the most sense. For instance, when I would click randomize when the game was already running, it would just continue with the game and new board. I wanted the game to stop when I changed the face of the board so you have to click play again. There were many things similar to this that I changed around to make the game as user friendly as possible!


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
