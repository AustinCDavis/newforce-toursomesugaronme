import{ getBookings, getVenues, getBands } from "./database.js"

const allBookings = getBookings();
const allVenues = getVenues();
const allBands = getBands();

const assignedBandName = (singleBooking) => {
    let bandName = ""

    for (const band of allBands) {
        if (band.id === singleBooking.bandId){
            bandName = band.name;
        }
    }
    return bandName
}

const assignedVenueName = (singleBooking) => {
    let venueName = ""

    for (const venue of allVenues) {
        if (venue.id === singleBooking.venueId){
            venueName = venue.name;
        }
    }
    return venueName
}




export const Bookings = () => {
    let bookingsHTML = "<ul class='bookingUL'>"
    
    for (const booking of allBookings) {
        const bName = assignedBandName(booking);
        const vName = assignedVenueName(booking);
        console.log(bName);
        console.log(vName);
        bookingsHTML += `<li>${bName} are playing at ${vName} on ${booking.dateOfBooking}</li>`
}

bookingsHTML += "</ul>"

return bookingsHTML
}