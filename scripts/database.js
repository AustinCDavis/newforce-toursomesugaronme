
const database = {
    bookings: [{
        id: 100,
        bandId: 2,
        venueId: 3,
        dateOfBooking: "03/11/2023"
    }, {
        id: 101,
        bandId: 3,
        venueId: 3,
        dateOfBooking: "03/11/2023"
    }, {
        id: 102,
        bandId: 5,
        venueId: 5,
        dateOfBooking: "03/14/2023"
    }, {
        id: 103,
        bandId: 4,
        venueId: 6,
        dateOfBooking: "03/18/2023"
    }, {
        id: 104,
        bandId: 4,
        venueId: 3,
        dateOfBooking: "03/18/2023"
    }, {
        id: 105,
        bandId: 8,
        venueId: 9,
        dateOfBooking: "03/25/2023"
    }, {
        id: 106,
        bandId: 4, 
        venueId: 7, 
        dateOfBooking: "03/28/2023"
    }, {
        id: 107,
        bandId: 3,
        venueId: 7,
        dateOfBooking: "04/15/2023"
    }, {
        id: 108,
        bandId: 1, 
        venueId: 8, 
        dateOfBooking: "04/22/2023"
    }, {
        id: 109,
        bandId: 8,
        venueId: 8,
        dateOfBooking: "04/22/2023"
    }, {
        id: 110,
        bandId: 5,
        venueId: 2,
        dateOfBooking: "04/29/2023"
    }, {
        id: 111,
        bandId: 2, 
        venueId: 9,
        dateOfBooking: "04/30/2023"
    }, {
        id: 112,
        bandId: 6,
        venueId: 9,
        dateOfBooking: "05/07/2023"
    }, {
        id: 113,
        bandId: 4,
        venueId: 4,
        dateOfBooking: "05/13/2023"
    }, {
        id: 114,
        bandId: 1,
        venueId: 1,
        dateOfBooking: "05/18/2023"
    }, {
        id: 115,
        bandId: 4,
        venueId: 9,
        dateOfBooking: "05/20/2023"
    }, {
        id: 116,
        bandId: 2,
        venueId: 7,
        dateOfBooking: "05/27/2023"
    }, {
        id: 117,
        bandId: 5,
        venueId: 8,
        dateOfBooking: "06/03/2023"
    }, {
        id: 118,
        bandId: 3,
        venueId: 8,
        dateOfBooking: "06/03/2023"
    }, {
        id: 119,
        bandId: 6,
        venueId: 2,
        dateOfBooking: "06/10/2023"
    }, {
        id: 120,
        bandId: 6,
        venueId: 8,
        dateOfBooking: "06/17/2023"
    }, {
        id: 121,
        bandId: 2,
        venueId: 6,
        dateOfBooking: "06/18/2023"
    }, {
        id: 122,
        bandId: 8,
        venueId: 3,
        dateOfBooking: "07/01/2023"
    }, {
        id: 123,
        bandId: 1,
        venueId: 9,
        dateOfBooking: "07/15/2023"
    }, {
        id: 124,
        bandId: 4,
        venueId: 1,
        dateOfBooking: "07/29/2023"
    }, {
        id: 125,
        bandId: 3,
        venueId: 1,
        dateOfBooking: "08/04/2023"
    }, {
        id: 126,
        bandId: 5,
        venueId: 4,
        dateOfBooking: "08/05/2023"
    }, {
        id: 127,
        bandId: 1,
        venueId: 5,
        dateOfBooking: "08/12/2023"
    }
    ],
    venues: [{
        id: 1,
        name: "The House",
        address: "310 Ship Dock Lane, California",
        squareFootage: 3700,
        maxOccupancy: 350
    }, {
        id: 2,
        name: "Diamond's Place",
        address: "9th Rock Street, Arizona",
        squareFootage: 3200,
        maxOccupancy: 280
    }, {
        id: 3,
        name: "Drunken Monkey",
        address: "1st Bottom Rd, Texas",
        squareFootage: 2800,
        maxOccupancy: 200
    }, {
        id: 4,
        name: "Glass House",
        address: "111 Shard Lane, New York", 
        squareFootage: 2600,
        maxOccupancy: 190
    }, {
        id: 5,
        name: "The Broken Barrel",
        address: "5th Spin St., Louisiana",
        squareFootage: 700,
        maxOccupancy:60
    }, {
        id: 6,
        name: "Rocky Road",
        address: "Sunset blvd, Texas",
        squareFootage: 1500,
        maxOccupancy: 70
    }, {
        id: 7,
        name: "Sky Life",
        address: "Mile 9 rd, Nevada",
        squareFootage: 2400,
        maxOccupancy: 180
    }, {
        id: 8,
        name: "Summer Palace",
        address: "2nd Summers Lane, California",
        squareFootage: 1700,
        maxOccupancy: 140
    }, {
        id: 9,
        name: "Violletta",
        address: "1st street, New Mexico",
        squareFootage: 3000,
        maxOccupancy: 250
    }, 
    ],
    bands: [{
        id: 1,
        name: "Moldy Biscuits",
        numOfMembers: 4,
        genre: "Metal",
        yearFormed: 1993
    }, {
        id: 2,
        name: "B2K",
        numOfMembers: 5,
        genre: "Pop",
        yearFormed: 2005
    }, {
        id: 3,
        name: "Backyard Tunes",
        numOfMembers: 2,
        genre: "Country",
        yearFormed: 2015
    }, {
        id: 4,
        name: "The Corona Queens",
        numOfMembers: 3,
        genre: "Pop",
        yearFormed: 2019
    }, {
        id: 5,
        name: "Soul Brothers",
        numOfMembers: 2,
        genre: "R&B",
        yearFormed: 1970
    }, {
        id: 6,
        name: "Big Nasty",
        numOfMembers: 1,
        genre: "Rap",
        yearFormed: 2020
    }, {
        id: 7,
        name: "Aces",
        numOfMembers: 5,
        genre: "Rock",
        yearFormed: 1976
    }, {
        id: 8,
        name: "Heart",
        numOfMembers: 3,
        genre: "Hip Hop",
        yearFormed: 2004
    }
    ],
    bandMembers: [{
        firstName:"Lucas",
        lastName: "Blackwood",
        yearBorn: 2010,
        bandRole: "Lead Singer",
        bandId: 1
    }, {
        firstName:"Bianca",
        lastName: "Rodriguez",
        yearBorn: 2004,
        bandRole: "Lead Guitar",
        bandId: 1
    }, {
        firstName:"Caleb",
        lastName: "White",
        yearBorn: 2007,
        bandRole: "Drummer",
        bandId: 1
    }, {
        firstName:"Jasmine",
        lastName: "Carter",
        yearBorn: 2008,
        bandRole: "Second Guitar",
        bandId: 1
    }, {
        firstName:"Leo",
        lastName: "Nguyen",
        yearBorn: 1991,
        bandRole: "Singer",
        bandId: 2
    }, {
        firstName:"Sylvia",
        lastName: "Zhang",
        yearBorn: 1992,
        bandRole: "Singer",
        bandId: 2
    }, {
        firstName:"Jesse",
        lastName: "Ramirez",
        yearBorn: 1991,
        bandRole: "Singer",
        bandId: 2
    }, {
        firstName:"Ava",
        lastName: "Patel",
        yearBorn: 1994,
        bandRole: "Singer",
        bandId: 2
    }, {
        firstName:"Nina",
        lastName: "Sharma",
        yearBorn: 2006,
        bandRole: "Singer",
        bandId: 2
    }, {
        firstName:"Tyler",
        lastName: "Sullivan",
        yearBorn: 1992,
        bandRole: "Singer/Banjo",
        bandId: 3
    }, {
        firstName:"Noah",
        lastName: "Martin",
        yearBorn: 1989,
        bandRole: "Singer/Guitar",
        bandId: 3
    }, {
        firstName: "Maya",
        lastName: "Foster",
        yearBorn: 2005,
        bandRole: "Singer",
        bandId: 4
    }, {
        firstName: "Evan",
        lastName: "James",
        yearBorn: 1990,
        bandRole: "Singer",
        bandId: 4
    }, {
        firstName: "Mia",
        lastName: "Wong",
        yearBorn: 2000,
        bandRole: "Singer",
        bandId: 4
    }, {
        firstName:"Zachary",
        lastName: "Patel",
        yearBorn: 1996,
        bandRole: "Singer/Harmonica",
        bandId: 5
    }, {
        firstName:"Simon",
        lastName: "Lee",
        yearBorn: 1992,
        bandRole: "Singer/Guitar",
        bandId: 5
    }, {
        firstName: "Louis",
        lastName: "Micheals",
        yearBorn: 2004,
        bandRole: "Rapper",
        bandId: 6
    }, {
        firstName:"Anthony",
        lastName: "Nguyen",
        yearBorn: 1999,
        bandRole: "Second Guitar",
        bandId: 7
    }, {
        firstName:"Dylan",
        lastName: "Cooper",
        yearBorn: 1993,
        bandRole: "Drummer",
        bandId: 7
    }, {
        firstName:"Aaron",
        lastName: "Davis",
        yearBorn: 2002,
        bandRole: "Lead Bass",
        bandId: 7
    }, {
        firstName:"Xavier Thompson",
        lastName: "",
        yearBorn: 1997,
        bandRole: "Lead Guitar",
        bandId: 7
    }, {
        firstName:"Jake",
        lastName: "Parker",
        yearBorn: 2003,
        bandRole: "Lead Singer",
        bandId: 7
    }, {
        firstName:"Benjamin",
        lastName: "Lee",
        yearBorn: 1995,
        bandRole: "Drummer",
        bandId: 8
    }, {
        firstName:"Owen",
        lastName: "Perez",
        yearBorn: 2001,
        bandRole: "Lead Guitar",
        bandId: 8
    }, {
        firstName:"Elijah",
        lastName: "Lewis",
        yearBorn: 1998,
        bandRole: "Lead Singer",
        bandId: 8
    }
    ]
}


export const getBookings = () => {
    return database.bookings.map(bookings => ({...bookings}))
}

export const getVenues = () => {
    return database.venues.map(venues => ({...venues}))
}

export const getBands = () => {
    return database.bands.map(bands => ({...bands}))
}

export const getbandMembers = () => {
    return database.bandMembers.map(bandMembers => ({...bandMembers}))
}