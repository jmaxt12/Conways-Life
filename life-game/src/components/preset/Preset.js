import React from "react";


import "./Preset.css";

const Preset = () => {
    const smile = [
        { x: 36, y: 11 },
        { x: 14, y: 12 },
        { x: 36, y: 12 },
        { x: 14, y: 13 },
        { x: 36, y: 13 },
        { x: 14, y: 14 },
        { x: 36, y: 14 },
        { x: 14, y: 15 },
        { x: 36, y: 15 },
        { x: 14, y: 16 },
        { x: 36, y: 16 },
        { x: 14, y: 17 },
        { x: 39, y: 25 },
        { x: 11, y: 26 },
        { x: 38, y: 27 },
        { x: 13, y: 28 },
        { x: 36, y: 29 },
        { x: 14, y: 31 },
        { x: 34, y: 31 },
        { x: 17, y: 32 },
        { x: 20, y: 33 },
        { x: 23, y: 33 },
        { x: 27, y: 33 },
        { x: 31, y: 33 }
       ];
  return (
    <div>
      <h2>Preset:</h2>
      <br />
      <div>
        <div className='individualPreset'>
          <img src='{pic}' alt='gnome' height='42' width='42'/>
          <button className='presetButton'>Preset 1</button>
        </div>
        <div className='individualPreset'>
        <img src='{pic}' alt='gnome' height='42' width='42'/>
          <button className='presetButton'>Preset 2</button>
        </div>
        <div className='individualPreset'>
        <img src='{pic}' alt='gnome' height='42' width='42'/>
          <button className='presetButton'>Preset 3</button>
        </div>
        <div className='individualPreset'>
        <img src='{pic}' alt='gnome' height='42' width='42'/>
          <button className='presetButton'>Preset 4</button>
        </div>
      </div>
    </div>
  );
};

export default Preset;

