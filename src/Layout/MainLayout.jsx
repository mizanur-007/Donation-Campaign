import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const MainLayout = () => {
const location = useLocation();

useEffect(()=>{
  if(location.pathname=='/'){
    document.title = 'Home';
  }
  else if(location.pathname=='/donations'){
    document.title = 'Donations';
  }
  else if(location.pathname=='/statistics'){
    document.title = 'Statistics';
  }
  else if(location.state){
    document.title = location.state;
  }
},[location.pathname])

  return (
<>
<div>
      <nav className="flex items-center gap-4 md:gap-0 justify-between max-w-6xl mx-auto pt-6 px-4 lg:px-0">
        <Link to='/gach'><img className="h-12" src="/Logo.png" alt="" /></Link>
        <ul className="flex items-center gap-3 md:gap-6">
          <li className="text-[#0B0B0B]">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-[#0B0B0B]">
            <NavLink
              to="/donations"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li className="text-[#0B0B0B]">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    
        <Outlet />
    </>
  );
};

export default MainLayout;
