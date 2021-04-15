import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <div id="navigation">
            <nav>
                <ul>
                    <li>
                        <Link to="./Front">Front</Link>
                    </li>
                    <li>
                        <Link to="./GetInTouch">GetInTouch</Link>
                    </li>
                    <li>
                        <Link to="./MaintainAble">MaintainAble</Link>
                    </li>
                    <li>
                        <Link to="./WhatWeDo">WhatWeDo</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Navigation;