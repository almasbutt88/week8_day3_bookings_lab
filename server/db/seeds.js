use hotel;
db.dropDatabase();


db.bookings.insertMany([
    {
        guestName: "John Johns",
        guestEmail: "MM@jla.com",
        checkedIn: "true"
      },
      {
        guestName: "Diana Prince",
        guestEmail: "WW@jla.com",
        checkedIn: "false"
      },
      {
        guestName: "John Stewart",
        guestEmail: "GL3@jla.com",
        checkedIn: "true"
      }
    ]);

