import React from 'react';
import eggItemOne from '../Images/egg-item-one.jpg';
import eggItemTwo from '../Images/egg-item-two.jpeg';
import eggItemThree from '../Images/egg-item-three.jpg';
import eggItemFour from '../Images/egg-item-four.jpg';

const Content = () => {
    return (
        <div className="grid grid-cols-2 text-center items-center bg-green-500 text-black">
            <div className="menu-card">
                <img src={eggItemOne} alt="egg" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Tomato Egg Curry</h2>
                    <p className="mb-2">Crispy, delicious, and nutritious</p>
                    <span>Price: $16</span>
                </div>
            </div>

            <div className="menu-card">
                <img src={eggItemTwo} alt="egg" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">English Breakfast</h2>
                    <p className="mb-2">Crispy, delicious, and nutritious</p>
                    <span>Price: $20</span>
                </div>
            </div>

            <div className="menu-card">
                <img src={eggItemThree} alt="egg" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Egg Chaat</h2>
                    <p className="mb-2">Crispy, delicious, and nutritious</p>
                    <span>Price: $15</span>
                </div>
            </div>

            <div className="menu-card">
                <img src={eggItemFour} alt="egg" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Egg Omelette</h2>
                    <p className="mb-2">Crispy, delicious, and nutritious</p>
                    <span>Price: $18</span>
                </div>
            </div>
        </div>
    );
};

export default Content;