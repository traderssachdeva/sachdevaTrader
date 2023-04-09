import React from "react";
import {
  HomeIcon,
  Squares2X2Icon,
  TruckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
function Header() {
  const router = useRouter()
  return (
    <div>
      <nav className="bg-white text-black">
        <div className="mx-auto max-w-7xl ">
          <div className=" cursor-pointer flex flex-row  justify-center h-20 items-center ">
            <div className="  space-x-2 items-center flex flex-row  justify-center lg:justify-center">
              <img
                className="h-10 w-10 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yg1Rc3HSuX8QnxjOSJYjN3TnLCkOeHO4QwZ9OsrmpPhCHgwdgh0mkrN2Cm1JePhavGc&usqp=CAU"
                alt=""
              />

              <a
                href="/"
                className="text-black cursor-pointer  capitalize text-2xl"
              >
                Dheeraj Enterprises
              </a>
            </div>
            <div className=" hidden capitalize md:inline-flex flex-1 items-center justify-end mr-32 sm:items-stretch ">
              <div className="hidden  sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#products"
                    className="bg-[#3A98B9] text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Products
                  </a>

                  <a
                    href="#about"
                    className="text-black/80 hover:bg-[#3A98B9] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    About us
                  </a>

                  <a
                    href="#ordernow"
                    className="text-black/80  hover:bg-[#3A98B9] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" sm:hidden    w-full  fixed left-0 bottom-0">
          <div className="flex bg-[#3A98B9] h-16  rounded-t-md  text-black px-20  justify-evenly cursor-pointer  flex-row items-center ">
            <ul className=" whitespace-nowrap list-none text-sm flex justify-between space-x-4 py-2 px-4 sm:px-8 sm:space-x-8 ">
              <div onClick={() => router.push("/")} className=" navbar text-white/80 ">
                <HomeIcon className="navBtn  h-5 w-5 " />

                <a> Home</a>
              </div>

              <div onClick={() => router.push("#about")} className=" navbar text-white/80  ">
                <UserIcon className="h-5 w-5 " />
                <a>About</a>
              </div>

              <div onClick={() => router.push("#ordernow")} className=" navbar text-white/80  ">
                <TruckIcon className="h-5 w-5 " />
                <li > Order now </li>
              </div>

              <div onClick={() => router.push("#products")} className=" navbar text-white/80 ">
                <Squares2X2Icon className="navBtn h-5 w-6" />
                <li>Products</li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
