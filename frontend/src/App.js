import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Reserve from "./components/ReservationPage";
import Profile from "./components/ProfilePage";
import Search from "./components/SearchResultPage";
import Home from "./components/HomePage";
import Details from "./components/RoomDetails";

const router = createBrowserRouter([
  {
    path: "",
    element: <IndexPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "reserve", element: <Reserve /> },
      { path: "profile", element: <Profile /> },
      { path: "search", element: <Search /> },
      { path: "roomdetails/:roomsId", element: <Details /> },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
