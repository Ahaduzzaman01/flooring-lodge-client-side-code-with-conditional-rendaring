import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className="d-flex justify-content-center align-items-center text-white text-center headerMain-container">
            <div>
                <h1>Visualize  Your Room Into  A Masterpiece!</h1>
                <p className="pt-4 w-75 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellendus placeat nulla
                    quam odit voluptatum eius expedita sint. Doloremque</p><br />
                <button className="btn btn-danger">Explore More</button>
            </div>
        </main>
    );
};

export default HeaderMain;