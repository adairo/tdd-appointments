const today = new Date();
const at = (hours) => today.setHours(hours, 0);

export const sampleAppointments = [
  {
    startsAt: at(9),
    customer: {
      firstName: "Charlie",
      lastName: "Cox",
      stylist: "David",
      service: "101",
      notes: "He want it red",
    },
  },
  {
    startsAt: at(10),
    customer: {
      firstName: "Franki",
      lastName: "White",
      service: "102",

      stylist: "David",
      notes: "He want it blue",
    },
  },
  {
    startsAt: at(11),
    customer: {
      firstName: "Cassie",
      lastName: "Rolex",
      stylist: "John",
      service: "103",

      notes: "She want it gray",
    },
  },
  {
    startsAt: at(12),
    customer: {
      firstName: "Ashley",
      lastName: "Spears",
      stylist: "John",
      service: "104",

      notes: "She want it yellow",
    },
  },
  // { startsAt: at(13), customer: { firstName: "Jordan" } },
  // { startsAt: at(14), customer: { firstName: "Jay" } },
  // { startsAt: at(15), customer: { firstName: "Alex" } },
  // { startsAt: at(16), customer: { firstName: "Jules" } },
];
