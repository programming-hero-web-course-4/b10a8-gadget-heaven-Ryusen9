import { useRoutes } from "react-router-dom"
import AllPosts from "../../Allposts.jsx/AllPosts";

const Body = () => {
    const element = useRoutes([
        {
            path:  "/",
            element: <AllPosts/>
        }
    ])
  return element;
}

export default Body