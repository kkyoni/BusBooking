import BusList from "../Pages/BookingList/BusList/BusList";
import BusConfirmDetails from "../Pages/BusConfirmDetails/BusConfirmDetails";
import AboutUs from "../Pages/Cms/AboutUs/AboutUs";
import ContactUs from "../Pages/Cms/ContactUs/ContactUs";
import Faq from "../Pages/Cms/Faq/Faq";
import Help from "../Pages/Cms/Help/Help";
import Support from "../Pages/Cms/Support/Support";
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
  {
    path: "About-Us",
    element: <AboutUs />,
  },
  {
    path: "Faq",
    element: <Faq />,
  },
  {
    path: "Contact-us",
    element: <ContactUs />,
  },
  {
    path: "Support",
    element: <Support />,
  },
  {
    path: "Help",
    element: <Help />,
  },
];

export default Pages;
