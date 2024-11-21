import { GoHome, GoQuestion } from "react-icons/go";
import { MdOutlineContactPhone } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { AiOutlineBank } from "react-icons/ai";
import { IoSpeedometerOutline, IoLayersOutline, IoClose } from "react-icons/io5";
import { FaWhatsapp, FaCaretDown } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi";
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";


const menu = [
  { name: "Dashboard", icon: <GoHome />, path: "/dashboard" },
  { name: "Contact", icon: <MdOutlineContactPhone />, path: "/contact" },
  { name: "Loan", icon: <CiFileOn />, path: "/loan" },
  {
    name: "Product",
    icon: <BsBag />,
    hasDropdown: true,
    dropdownItems: [
      { name: "Bank Product", path: "/dashboard/product/bank-product" },
      { name: "Product", path: "/dashboard/product/list" },
      { name: "Category Product", path: "/dashboard/product/view" },
    ]
  },
  { name: "Bank", icon: <AiOutlineBank />, path: "/bank" },
  { name: "Credit Score", icon: <IoSpeedometerOutline />, path: "/speedometer" },
  { name: "FAQ's", icon: <GoQuestion />, path: "/faqs" },
  { name: "Pipeline", icon: <IoLayersOutline />, path: "/pipeline" },
  { name: "Pipeline Developer", icon: <IoLayersOutline />, path: "/pipeline-dev" },
  { name: "Whatsapp", icon: <FaWhatsapp />, path: "/whatsapp" },
];


function DashboardLayout({ children }) {
  const [active, setActive] = useState(false)
  const [showProductDropdown, setShowProductDropdown] = useState(false)

  const getCurrentPageTitle = () => {
    const currentPath = location.pathname;
    let currentPathLength = currentPath.split("/").length
    if (currentPathLength > 2) {
      const deleteSlash = currentPath.split('/')[2].replace("-", " ")
      return deleteSlash.charAt(0).toUpperCase() + deleteSlash.slice(1)
    }
    const deleteSlash = currentPath.split('/')[1]
    return deleteSlash.charAt(0).toUpperCase() + deleteSlash.slice(1)
  }

  const handleNavbar = () => setActive(!active)

  return (
    <div className="flex font-inter">
      <div className="flex w-full ">
        <aside className="hidden overflow-hidden md:block md:w-[270px] h-screen border border-gray-200 shadow-lg md:sticky md:top-0">
          <img src="/images/logo.png" className="w-[100px] mx-auto -mt-1" alt="" />
          <div className="h-screen flex flex-col gap-5 p-3 mt-5">
            {
              menu.map((item, index) => {
                return (
                  <div key={index}
                    onClick={() => setShowProductDropdown(!showProductDropdown)}>


                    {item.hasDropdown ? (
                      <div className="flex flex-col  gap-3 p-2 rounded-lg cursor-pointer "

                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[18px]">{item.icon}</span>
                          <span className="text-[18px]">{item.name}</span>
                          <FaCaretDown className={`transform ${showProductDropdown ? 'rotate-180' : ''}`} />
                        </div>

                        {showProductDropdown && (
                          <div className="ml-8 mt-2">
                            {item.dropdownItems.map((dropdownItem, dropIndex) => (
                              <NavLink
                                key={dropIndex}
                                to={dropdownItem.path}
                                className={({ isActive }) =>
                                  `block p-2 rounded-lg mb-1
                                  ${isActive ? "bg-[#17A9E2] text-white" : "hover:bg-gray-200"}`
                                }
                              >
                                {dropdownItem.name}
                              </NavLink>
                            ))}
                          </div>
                        )}

                      </div>
                    ) : (
                      <NavLink
                        to={item.path}
                        key={index}
                        className={({ isActive }) =>
                          `flex items-center gap-3 p-2 rounded-lg 
                      ${isActive ? "bg-[#17A9E2] text-white" : "hover:bg-gray-200"}`
                        }
                      >
                       <span className="text-[18px]">{item.icon}</span>
                       <span className="text-[18px]">{item.name}</span>
                      </NavLink>

                    )}

                  </div>


                )
              })
            }
          </div>
        </aside>
        <div className="w-full">
          <nav>
            <div className="px-10 py-5 flex justify-between border-b border-gray-300">
              <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold">
                {getCurrentPageTitle()}
              </h1>
              <div className=" hidden md:flex">
                <div className="border-l px-1 flex justify-center items-center flex-row border-gray-300 ">
                  <h1 className="mx-auto text-xl"><HiOutlineBell /> </h1>
                  <h1 className="mx-auto text-xl"><FaCaretDown /></h1>
                </div>
                <div className="border-l border-r flex justify-center items-center flex-row gap-1 px-2 border-gray-300 ">
                  <h1 className="mx-auto text-gray-500">YOHANNES AFANDY</h1>
                  <h1 className="mx-auto text-xl"><FaCaretDown /></h1>
                </div>
              </div>
              <button onClick={handleNavbar} className="md:hidden block">
                {
                  active ? <IoClose /> : <RxHamburgerMenu />
                }

              </button>
            </div>
            <div
              className={`md:hidden sticky overflow-y-auto top-18 left-0 w-full bg-white z-50 transition-all border-b border-gray-300 duration-300 ${active ? "h-auto" : "h-0"} `}
            >
              <div className=" px-8 py-2 flex w-full justify-between">
                <div className="flex justify-center items-center flex-row border-gray-300 ">
                  <h1 className="mx-auto text-xl"><HiOutlineBell /> </h1>
                  <h1 className="mx-auto text-xl"><FaCaretDown /></h1>
                </div>
                <div className="flex justify-center items-center flex-row gap-1 px-2 border-gray-300 ">
                  <h1 className="mx-auto text-gray-500">YOHANNES AFANDY</h1>
                  <h1 className="mx-auto text-xl"><FaCaretDown /></h1>
                </div>
              </div>
              <div className="md:w-[270px] h-screen border border-gray-200 shadow-lg">
                <img src="../images/logo.png" className="w-[100px] mx-auto " alt="" />
                <div className="h-screen top-0 flex flex-col gap-5 p-3 mt-5">
                  {
                    menu.map((item, index) => {
                      return (
                        <div key={index}
                          onClick={() => setShowProductDropdown(!showProductDropdown)}>
                          {item.hasDropdown ? (
                            <div className="flex flex-col  gap-3 p-2 rounded-lg cursor-pointer ">
                              <div className="flex items-center gap-3">
                                <span className="text-[20px]">{item.icon}</span>
                                <span className="text-[20px]">{item.name}</span>
                                <FaCaretDown className={`transform ${showProductDropdown ? 'rotate-180' : ''}`} />
                              </div>

                              {showProductDropdown && (
                                <div className="ml-8 mt-2">
                                  {item.dropdownItems.map((dropdownItem, dropIndex) => (
                                    <NavLink
                                      key={dropIndex}
                                      to={dropdownItem.path}
                                      className={({ isActive }) =>
                                        `block p-2 rounded-lg mb-1
                                        ${isActive ? "bg-[#17A9E2] text-white" : "hover:bg-gray-200"}`
                                      }
                                    >
                                      {dropdownItem.name}
                                    </NavLink>
                                  ))}
                                </div>
                              )}

                            </div>
                          ) : (
                            <NavLink
                              to={item.path}
                              key={index}
                              className={({ isActive }) =>
                                `flex items-center gap-3 p-2 rounded-lg 
                            ${isActive ? "bg-[#17A9E2] text-white" : "hover:bg-gray-200"}`
                              }
                            >
                              <span className="text-[20px]">
                                {item.icon}
                              </span>
                              <span className="text-[20px]">
                                {item.name}
                              </span>
                            </NavLink>

                          )}

                        </div>


                      )
                    })
                  }
                </div>
              </div>

            </div>
          </nav>
          <main className="bg-[#F2F2F2] relative">
            {children}
          </main>
        </div>
      </div>

    </div>
  )
}

export default DashboardLayout