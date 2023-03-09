import{ getBookings, getVenues, getBands } from "./database.js"

const allBookings = getBookings();
const allVenues = getVenues();
const allBands = getBands();

//===========Creating function to find band name==========
const assignedBandName = (singleBooking) => {
    let bandName = ""

    for (const band of allBands) {
        if (band.id === singleBooking.bandId){
            bandName = band.name;
        }
    }
    return bandName
}
//===========Creating function to find venue name==========
const assignedVenueName = (singleBooking) => {
    let venueName = ""

    for (const venue of allVenues) {
        if (venue.id === singleBooking.venueId){
            venueName = venue.name;
        }
    }
    return venueName
}

//=============ClickEvent Listener===================

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("booking")) {
            
            const [,bandID] = itemClicked.id.split("--")

            for (const band of allBands) {
                if (band.id === parseInt(bandID)) {
                    window.alert(`${band.name} \n${band.genre} \nFormed in ${band.yearFormed}\n${band.numOfMembers} band members`)
                }
            }
        }
    }
)


//===========Creating export function==================
export const Bookings = () => {
    let bookingsHTML = "<ul class='bookingUL'>"
    
    for (const booking of allBookings) {
        const bName = assignedBandName(booking);
        const vName = assignedVenueName(booking);
        bookingsHTML += `<li id="booking--${booking.bandId}">${bName} are playing at ${vName} on ${booking.dateOfBooking}</li>`
}

bookingsHTML += "</ul>"

return bookingsHTML
}