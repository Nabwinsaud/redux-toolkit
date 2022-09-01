import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsers } from "../redux/userSlice";
const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users);
  // const userDatas = useSelector((state) => state.users.userInformation);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUsers({ name, email }));
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div className="my-4 text-center">
        {/* <div className="shadow-md py-5 rounded-md"> */}
        <div className="text-xl text-gray-600  px-9 py-3">
          <p>
            Hi Mr
            <span className="text-bold text-blue-600">{userData.name}</span> how
            was your day visiting the Hustler harder company
            <span>
              your email is
              <span className="text-bold text-blue-700">
                {/* {userData.email} */}
                {userData.email}
                {/* john@example.com{" "} */}
              </span>{" "}
              is private
            </span>
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[500px] flex flex-col items-start mx-auto my-8"
        >
          <div className="flex px-1 items-start flex-col my-2">
            <label htmlFor="username">username</label>
            <input
              type="text"
              placeholder={userData?.name}
              className="py-3 w-[300px] border-gray-400  rounded-md border-2 focus:outline-none focus:border-sky-700 focus:ring-3 focus:ring-sky-700 placeholder-slate-400 "
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col my-2 items-start px-1">
            <label htmlFor="username">email</label>
            <input
              type="email"
              // aria-autocomplete="off"
              autoComplete="off"
              placeholder={userData.email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="py-3 w-[300px] border-gray-400  rounded-md border-2 focus:outline-none focus:border-sky-700 focus:ring-3 focus:ring-sky-700 invalid:border-red-500 invalid:text-red-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            />
          </div>
          <div className="flex items-start flex-col my-2">
            <label htmlFor="username">password</label>
            <input
              type="password"
              autoComplete="off"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="py-3 w-[300px] border-gray-400  rounded-md border-2 focus:outline-none focus:border-sky-700 focus:ring-3 focus:ring-sky-700 "
            />
          </div>

          <div className="my-3">
            <button
              type="submit"
              className="bg-black text-white text-xl py-3 px-8 rounded-md hover:bg-gray-700 hover:scale-105"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default Home;
