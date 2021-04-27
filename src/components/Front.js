import React, { Fragment } from 'react';
import Navigation from "../components/Navigation";

const Front = () => {

    return (

        <Fragment>
            <section id="FrontSect">
            <Navigation />
                <img id="logo" src="/assets/logo/logo-final.png" alt="What we do banner"></img>
                <img src="/assets/img/front-what-we-do.png" alt="What we do banner"></img>
                <img src="/assets/img/front-maintainable.png" alt="What we do banner"></img>
                <img src="/assets/img/front-get-in-touch.png" alt="What we do banner"></img>
                <h6 id="AYMTM">And yet... more to come</h6>
            </section>
        </Fragment>
    )
};

export default Front;