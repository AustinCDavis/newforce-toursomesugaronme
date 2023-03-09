import{ getBookings, getVenues, getBands } from "./database.js"

const allBookings = getBookings();
const allVenues = getVenues();
const allBands = getBands();


const filterBookingsByBands = (singleBand) => {
    const venueBookings = []

for (const booking of allBookings) {

    if (booking.bandId === singleBand.id) {
        venueBookings.push(booking)
        }
 
    }
    return venueBookings
}

const assignedVenueNames = (venueBookings) => {
    let venueNames = []

for (const venueBooking of venueBookings) {
    for (const venue of allVenues) {
        if (venue.id === venueBooking.venueId)
        venueNames.push(`${venue.name} \n `)
    }
}

return venueNames.join("")

}

document.addEventListener(
"click",
(clickEvent) => {

const itemClicked = clickEvent.target

if (itemClicked.id.startsWith("band")) {

    const [,bandId] = itemClicked.id.split("--")

    for (const band of allBands) {
        if (band.id === parseInt(bandId)){
        const bookings = filterBookingsByBands(band)
        const venues = assignedVenueNames(bookings)

        window.alert(`${venues}`)
        }
    }
}
}
)



export const Bands = () => {
        
    let bandsHTML = "<ul>"
    
    for (const band of allBands) {
        bandsHTML += `<li id="band--${band.id}">${band.name}</li>`
}

bandsHTML += "</ul>"

return bandsHTML
}