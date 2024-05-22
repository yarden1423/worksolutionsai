import Chat from "./components/Chat";
import CVpage from "./pages/CVpage";
import Login from './pages/Login'

const routes = [
  {
    path: "/",
    element: <Chat />,
  },
  {
    path: "/cvpage",
    element: <CVpage />,
  },
  {
    path: "/login",
    element: <Login />
  }
];

export { routes };
