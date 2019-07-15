import React, {Component} from "react"

import './Grid.css'

const CELL_SIZE = 10;
const WIDTH = 500;
const HEIGHT = 500;

class Grid extends Component {

    render() {
        return(
            <div>        
                <div className="Board"  style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}/>
            </div>
        ) 
    }
}

export default Grid 