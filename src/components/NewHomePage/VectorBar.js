// VectorBar.js

import React from 'react';
import './VectorBar.css'; // Ensure correct path to CSS file
import vector from './NewHomePageImages/vector.png';
import vectorf from './NewHomePageImages/vectorf.png';
import vectors from './NewHomePageImages/vectors.png';

const VectorBar = () => {
    return (
        <div className="vector-bar">
             <div className="vector-item">
            <img src={vector} alt="Rupee" className="vector-item" />
            <p>Lower Interest Rates</p>
            </div>
            <div className="vector-item">
            <img src={vectorf} alt="Home Credit" className="vector-item" />
            <p>Easier Renting</p>
            </div>
            <div className="vector-item">
            <img src={vectors} alt="Home Credit Limit" className="vector-item" />
            <p>Higher Credit Limits</p>
            </div>
        </div>
    );
}

export default VectorBar;
