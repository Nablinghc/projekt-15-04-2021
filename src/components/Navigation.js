import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div id="navigation">
            <nav>
                <ul>
                    <li>
                        <Link to="./Front"><img src="/assets/navigation/back.png"></img></Link>
                    </li>
                    <li>
                        <Link to="./GetInTouch"><img src="/assets/navigation/nav-1.png"></img></Link>
                    </li>
                    <li>
                        <Link to="./MaintainAble"><img src="/assets/navigation/nav-2.png"></img></Link>
                    </li>
                    <li>
                        <Link to="./WhatWeDo"><img src="/assets/navigation/nav-3.png"></img></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Navigation;