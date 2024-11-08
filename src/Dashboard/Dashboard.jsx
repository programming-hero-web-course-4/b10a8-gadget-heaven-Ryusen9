import { Link, Outlet } from "react-router-dom"

function Dashboard() {
  return (
    <>
    <div className="h-screen font-sora">
      <div className="bg-gradient-to-t mb-4 gap-2 flex-col from-purple-400 to-purple-300 h-[45vh] flex items-center justify-center">
        <p className="text-3xl md:text-4xl font-semibold">Dashboard</p>
        <p className="text-center px-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className="flex items-center justify-center gap-4">
          <Link to={"/Dashboard/Carts"}>
          <button className="btn">Cart</button>
          </Link>
          <Link to={"/Dashboard/Wishlist"}>
          <button className="btn">Wishlist</button>
          </Link>
        </div>
      </div>
    <Outlet/>
    </div>
    </>
  )
}

export default Dashboard