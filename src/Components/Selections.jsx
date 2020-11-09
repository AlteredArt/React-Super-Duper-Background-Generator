import React from 'react';

export default function Selections() {
    return (
        <div className='Selections'>
            <input class="color1" type="color" name="color1" value="#FFFFFF" />
            <input class="color2" type="color" name="color2" value="#FFFFFF" />
            <hr />
            <button id='radial'>Radial</button>
            <button id='linear'>Linear</button><br />
        </div>
    )
}