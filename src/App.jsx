import { useRoutes } from "react-router-dom";
import Root from "./Root/Root";
import AllPosts from "./Allposts.jsx/AllPosts";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import Statistics from "./Statistics/Statistics";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/Dashboard",
          element: <Dashboard/>
        },
        {
          path: "/Statistics",
          element: <Statistics/>
        }
      ]
    },
  ]);
  return element;
}

export default App;
