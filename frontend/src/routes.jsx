import Chat from "./components/Chat";
import CVpage from "./pages/CVpage";

const routes = [
  {
    path: "/",
    element: <Chat />,
  },
  {
    path: "/cvpage",
    element: <CVpage />,
  },
];

export { routes };
