import React, { Fragment } from 'react';
import Navigation from "../components/Navigation";

const WhatWeDo = () => {

  return (

    <Fragment>
      <section class="WhatWeDoSect">
      <Navigation />
        {/* <div id="returnBotton">R</div>
        <div id="box_1">What We Do Box</div>
        <div id="box_2">Maintain Able Box</div>
        <div id="box_3" style={{borderBottomColor: "coral", borderBottomStyle: "solid"}}>GetInTouch Box</div> */}

        <img class="Banner" src="/assets/img/link/front-whatwedo-link.png" alt="What we do banner"></img>

        <h2 class="ThereForYou">
          Design is the <span>matter of choice</span> ...
        </h2>
        <p class="FyldTekst">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete account of the system, and
          expound the actual teachings of the great explorer of the truth, the master-builder of human
          happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because
          those who do not know how to pursue pleasure rationally encounter consequences that are.

          <br></br>

          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete account of the system, and
          expound the actual teachings of the great explorer of the truth, the master-builder of human
          happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because
          those who do not know how to pursue pleasure rationally encounter consequences that are.
        
          <br></br>

          because
          those who do not know how to pursue pleasure rationally encounter consequences that are.
        </p>

        <h6 class="WhatWeDo">What We Do</h6>
      </section>
    </Fragment>
  )
};

export default WhatWeDo;