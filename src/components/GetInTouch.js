import React, { Fragment } from 'react';
import Navigation from "../components/Navigation";

const GetInTouch = () => {

  return (

    <Fragment>
      <section class="GetInTouchSect">
      <Navigation />
        {/* <div id="returnBotton">R</div>
        <div id="box_1" style={{borderBottomColor: "coral", borderBottomStyle: "solid"}}>What We Do Box</div>
        <div id="box_2">Maintain Able Box</div>
        <div id="box_3">GetInTouch Box</div> */}


        <img class="Banner" src="/assets/img/link/front-getintouch-link.png" alt="What we do banner"></img>

        <img class="Billede1" src="/assets/img/small/whatwedo-small.png" alt="What we do banner"></img>
        <img class="Billede2" src="/assets/img/small/maintainable-small.png" alt="What we do banner"></img>
        <img class="Billede3" src="/assets/img/small/getintouch-small.png" alt="What we do banner"></img>

        <h2 class="ThereForYou">
          There for you and <span>care for you</span> ...
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
          happiness.
        </p>

        <h6 class="GetInTouch">GetInTouch</h6>
      </section>

    </Fragment>
  )
};

export default GetInTouch;