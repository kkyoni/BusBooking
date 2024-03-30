import BusList from "../Pages/BookingList/BusList/BusList";
import BusConfirmDetails from "../Pages/BusConfirmDetails/BusConfirmDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Payment from "../Pages/Payment/Payment";
import Profile from "../Pages/Profile/Profile";

const Pages = [
  {
    path: "",
    element: <Dashboard />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "buslist/:from?/:to?",
    element: <BusList />,
  },
  {
    path: "BusConfirmDetails",
    element: <BusConfirmDetails />,
  },
  {
    path: "Payment",
    element: <Payment />,
  },
];

export default Pages;
