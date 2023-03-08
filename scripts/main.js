import { Bookings } from "./Bookings.js"
import { Venues } from "./Venues.js"
import { Bands } from "./Bands.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar on Me</h1>
<article class="bookings">
    <h2 id="booking">Current Bookings</h2>
    ${Bookings()}
</article>
<article class="details">
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${Bands()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML

