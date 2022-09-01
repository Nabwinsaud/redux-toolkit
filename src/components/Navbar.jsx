import React from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  //   const userData = useSelector((state) => state.users.userInformation.name);
  const userData = useSelector((state) => state.users);
  //   const userData = useSelector((state) => state.users.userInformation);
  //   console.log(userData.name);
  //   console.log(userData.name)
  return (
    <div className="flex w-full items-center">
      <div className="flex  w-full justify-between items-center px-10">
        <div>
          <h1 className="text-4xl font-bold text-green-600">Hustle</h1>
        </div>
        <ul className="flex text-2xl space-x-6   items-center">
          <li>Home</li>
          <li>About</li>
          {/* <li>Blog</li> */}
          {/* <li>John doe</li> */}
          <li className=" bg-gray-700 text-white px-2 py-1  rounded-full">
            {/* {userData.name || userData.userInformation.name} */}
            {userData.name}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
