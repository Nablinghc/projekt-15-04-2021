import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div id="navigation">
            <nav>
                <ul>
                    <li>
                        <Link to="./Front"><img class="pixel50" src="/assets/navigation/back.png" alt="Back"></img></Link>
                    </li>
                    <li>
                        <Link to="./GetInTouch"><img class="pixel50" src="/assets/navigation/nav-1.png" alt="Nav1"></img></Link>
                    </li>
                    <li>
                        <Link to="./MaintainAble"><img class="pixel50" src="/assets/navigation/nav-2.png" alt="Nav2"></img></Link>
                    </li>
                    <li>
                        <Link to="./WhatWeDo"><img class="pixel50" src="/assets/navigation/nav-3.png" alt="Nav3"></img></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Navigation;