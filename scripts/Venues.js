import{ getBookings, getVenues, getBands } from "./database.js"

const allBookings = getBookings();
const allVenues = getVenues();
const allBands = getBands();

    const filterBookingsByVenues = (singleVenue) => {
            const bandBookings = []

        for (const booking of allBookings) {

            if (booking.venueId === singleVenue.id) {
                bandBookings.push(booking)
                }
         
            }
            return bandBookings
    }

    const assignedBandNames = (bandBookings) => {
            let bandNames = []

        for (const bandBooking of bandBookings) {
            for (const band of allBands) {
                if (band.id === bandBooking.bandId)
                bandNames.push(`${band.name}\n`)
            }
        }

        return bandNames.join("")
    
    }

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("venue")) {

            const [,venueId] = itemClicked.id.split("--")

            for (const venue of allVenues) {
                if (venue.id === parseInt(venueId)){
                const bookings = filterBookingsByVenues(venue)
                const bands = assignedBandNames(bookings)

                window.alert(`${bands}`)
                }
            }
        }
    }
)

export const Venues = () => {
        
    let venuesHTML = "<ul>"
    
    for (const venue of allVenues) {
        venuesHTML += `<li id="venue--${venue.id}">${venue.name}</li>`
}

venuesHTML += "</ul>"

return venuesHTML
}