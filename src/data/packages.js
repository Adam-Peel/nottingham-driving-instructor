// Base rate is £45/hour — package prices below are that rate x hours.
export const HOURLY_RATE = 45;

export const packages = [
  {
    id: "1",
    title: "Introductory Package",
    price: String(HOURLY_RATE * 5),
    hours: 5,
    transmission: "Manual",
    includes: "Free 30-min assessment lesson",
    popular: false,
  },
  {
    id: "2",
    title: "Standard Package",
    price: String(HOURLY_RATE * 10),
    hours: 10,
    transmission: "Manual",
    includes: "1 mock test included",
    popular: true,
  },
  {
    id: "3",
    title: "Intensive Course",
    price: String(HOURLY_RATE * 20),
    hours: 20,
    transmission: "Manual",
    includes: "2 mock tests included",
    popular: false,
  },
];
