import{ getBookings, getVenues, getBands } from "./database.js"

const allBookings = getBookings();
const allVenues = getVenues();
const allBands = getBands();




export const Bands = () => {
        
    let bandsHTML = "<ul>"
    
    for (const band of allBands) {
        bandsHTML += `<li id="band--${band.id}">${band.name}</li>`
}

bandsHTML += "</ul>"

return bandsHTML
}