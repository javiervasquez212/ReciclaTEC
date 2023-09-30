import LandingPage from "../pages/LandingPage/LandingPage";
import Login from "../pages/LoginPage/LoginPage";
import Register from "../pages/RegisterPage/RegisterPage";
import RecyclingLog from "../pages/LogsPage/LogsPage";
import RecyclingChart from "../pages/ChartsPage/ChartsPage";

export const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/Login", element: <Login /> },
  { path: "/Register", element: <Register /> },
  { path: "/RecyclingLog", element: <RecyclingLog /> },
  { path: "/RecyclingChart", element: <RecyclingChart /> },
];
