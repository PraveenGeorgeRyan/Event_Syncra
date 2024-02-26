export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Create Event",
    route: "/events/create",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
];

export const eventDefaultValues = {
  title: "Example: Arun's Birthday Party",
  description:
    "Example; Expected around 50 guests, looking for catering services, Tables and chairs, and other party decoration essentials like balloons, and party wearables, etc. Please contact me for more details.",
  location:
    "5-XX-XX, 1st Floor, ABC Building, XYZ Street, City, State, Country, Pincode.",
  // imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "Example: Birthday, Wedding, Engagement, etc.",
  // price: "",
  // isFree: false,
  // url: "",
};
