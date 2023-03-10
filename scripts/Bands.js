import{ getBookings, getVenues, getBands, getbandMembers } from "./database.js"

const allBookings = getBookings();
const allVenues = getVenues();
const allBands = getBands();
const allBandMembers = getbandMembers();

//Function to store band members
const filterBandMembersByBand = (singleBand) => {
    const bandMembers = []

for (const bandMember of allBandMembers) {

    if (bandMember.bandId === singleBand.id) {
        bandMembers.push(`${bandMember.firstName} ${bandMember.LastName} (${bandMember.bandRole})\n`)
        }
 
    }
    return bandMembers.join("")
}


//Function to store venue bookings
const filterBookingsByBands = (singleBand) => {
    const venueBookings = []

for (const booking of allBookings) {

    if (booking.bandId === singleBand.id) {
        venueBookings.push(booking)
        }
 
    }
    return venueBookings
}

//Function to pull venue names
const assignedVenueNames = (venueBookings) => {
    let venueNames = []

for (const venueBooking of venueBookings) {
    for (const venue of allVenues) {
        if (venue.id === venueBooking.venueId)
        venueNames.push(`${venue.name}\n `)
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
        const members = filterBandMembersByBand(band)
        window.alert(`${members}\nUpcoming shows:\n ${venues} \n`)
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