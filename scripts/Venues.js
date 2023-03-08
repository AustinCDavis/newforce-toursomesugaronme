import{ getBookings, getVenues, getBands } from "./database.js"

const allBookings = getBookings();
const allVenues = getVenues();
const allbands = getBands();




export const Venues = () => {
        
    let venuesHTML = "<ul>"
    
    for (const venue of allVenues) {
        venuesHTML += `<li id="venue--${venue.id}">${venue.name}</li>`
}

venuesHTML += "</ul>"

return venuesHTML
}