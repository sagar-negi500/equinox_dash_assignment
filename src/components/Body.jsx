import { useState } from "react";

const Body = () => {
      const [activeTab, setActiveTab] = useState("Sites"); 
    const tabs = ["Sites", "Orders", "VRs", "Reports", "Invoices", "PI"];

     const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="max-w-screen-xl lg:mx-auto  lg:my-6 my-2 lg:mx-0 mx-4 border border-[#D9D9D9]   rounded text-sm">
        <div className="flex justify-between flex-wrap items-center px-2 pt-2 pb-2">
          <div>
            <h1 className="text-[16px] p-0 font-medium text-black">
              Burman Hospitality Pvt. Ltd.
            </h1>
            <div className="flex justify-between flex-wrap items-center px-0 pt-1 pb-1 max-md:mb-3">
              <div className="text-[11px] text-[#7D7D7D] flex flex-wrap gap-x-1 gap-y-3 items-center">
                <span>● Delhi</span>
                <span>● Central Delhi</span>
                <span>● 110002</span>
                <span className="font-semibold before:text-black after:text-black before:content-['|'] after:content-['|'] before:mx-1 after:mx-1">
                  Created on : 1 Jul 2022
                </span>

                <span className="text-[10px] bg-[#E6F1FD] text-[#0078D4] font-bold px-2 py-[5px] rounded-lg h-fit">
                  POSTPAID
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <i className="fa fa-bars fs-6 hover:cursor-pointer text-xl! text-[#0078D4]"></i>

            <button  onClick={() => setShowModal(true)}  className="bg-[#0078D4] hover:cursor-pointer text-white text-md px-3 py-[8px] rounded-lg h-fit">
              + Raise Query
            </button>

            

   {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-start justify-center pt-24 z-50">
    <div className="bg-white sm:max-w-lg w-full mx-4 rounded-xl shadow-2xl animate-slideDown relative">
      
      {/* Close X Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-2 hover:cursor-pointer text-gray-400 hover:text-black text-xl font-bold"
        aria-label="Close"
      >
        &times;
      </button>

      <div className="p-6 pointer-events-auto">
        <h3 className="text-xl font-semibold text-[#1F3A60] mb-2">Query</h3>
        <p className="text-sm text-gray-600 mb-2">Write a query</p>

        <textarea
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#0078D4]"
          rows="3"
          placeholder="Enter your query..."
        ></textarea>

       
        <div className="text-right flex justify-end gap-2">
          <button
            onClick={() => setShowModal(false)}
            className="text-sm text-gray-700 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Close
          </button>
          <button
            onClick={() => {
            
              setShowModal(false);
            }}
            className="text-sm text-white bg-[#0078D4] px-4 py-2 rounded hover:bg-[#005fa3]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
)}







          </div>
        </div>

        <div className="border-t border-[#D9D9D9] px-4 pt-2 pb-2 grid grid-cols-1 lg:grid-cols-4 gap-y-3 text-[13px]">
          <div className="flex gap-5">
            <div>
              <p className="font-semibold text-[14px]">10,00,000</p>
              <p className="text-[#7D7D7D]">Total Revenue</p>
            </div>
            <div>
              <p className="font-semibold text-[14px]">7,00,000</p>
              <p className="text-[#7dd786]">Payment Received</p>
            </div>

            <div>
              <p className="font-semibold text-[14px]">1,00,000</p>
              <p className="text-[#0078D4]">Not Yet Due</p>
            </div>
          </div>

          <div className="lg:flex block items-center md:justify-center justify-start before:content-[''] lg:before:content-['|'] before:self-start before:text-3xl lg:before:px-[80px]">
            <p className="text-[#f04a4a] text-[16px] leading-[1] mb-1 ">
              Payment
              <span className="hidden lg:inline">
                <br />
              </span>
              <span className="inline lg:hidden">&nbsp;</span>
              Overdue
            </p>
          </div>
          <div className="">
            <div className="flex justify-between text-xs text-black lg:w-full w-70">
              <p className="text-center">
                20,000
                <br />
                <span className="text-[#f59c07]">A</span>
              </p>
              <p className="text-center">
                50,000
                <br />
                <span className="text-[#ee8b53]">B</span>
              </p>
              <p className="text-center">
                50,000
                <br />
                <span className="text-[#e96b35]">C</span>
              </p>
              <p className="text-center">
                30,000
                <br />
                <span className="text-[#ec6161]">D</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D9D9D9] px-4 pt-3 pb-4 grid grid-cols-2 sm:grid-cols-5 gap-y-2 text-[13px]">
          <div>
            <p className="text-[#7D7D7D] text-xs">Lead Category - Source</p>
            <p className="font-semibold text-black">Others - References</p>
          </div>
          <div>
            <p className="text-[#7D7D7D] text-xs">
              Latest Category - Lead source
            </p>
            <p className="font-semibold text-black">-</p>
          </div>
          <div>
            <p className="text-[#7D7D7D] text-xs">Last Updated</p>
            <p className="font-semibold text-black">07 Nov 2023</p>
          </div>

          <div>
            <p className="text-[#7D7D7D] text-xs">Total Outstanding</p>
            <p className="font-semibold text-[#f04a4a]">10,00,000</p>
          </div>

          <div>
            <p className="text-[#7D7D7D] text-xs">Last Order Date</p>
            <p className="font-semibold text-[#f04a4a]">10 Dec 2023 03:30 PM</p>
          </div>
        </div>
      </div>

      <div className="rounded  lg:my-6 my-2 mt-4 lg:mx-auto max-w-screen-xl m-4 flex flex-col lg:flex-row gap-4">
        <div className="flex-1">


          <div className="flex gap-6 text-[13px] font-medium text-[#7D7D7D] md:my-[20px] my-[10px] pl-4">
            {/* <span className="text-black relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[20px] after:h-[4px] after:bg-[#0078D4]">
              Sites
            </span>
            <span>Orders</span>
            <span>VRs</span>
            <span>Reports</span>
            <span>Invoices</span>
            <span>PI</span> */}


             {tabs.map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-3 cursor-pointer ${
              activeTab === tab ? 'text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-[20px] after:h-[4px] after:bg-[#0078D4]' : ''
            }`}
          >
            {tab}
          </span>
        ))}
          </div>

                  {activeTab === "Sites" && (
          <div className="overflow-x-auto">
            <table className="lg:w-[95%] w-full text-[13px] border border-[#D9D9D9]">
              <thead className="">
                <tr>
                  <th className="text-center px-2 py-2 text-[#7D7D7D]">
                    Site Name
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">State</th>
                  <th className="text-center px-2 text-[#7D7D7D]">City</th>
                  <th className="text-center px-2 text-[#7D7D7D]">Revenue</th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Total orders
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Last Order
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}


         {activeTab === "Orders" && (
            <div className="overflow-x-auto">
            <table className="lg:w-[95%] w-full text-[13px] border border-[#D9D9D9]">
              <thead className="">
                <tr>
                  <th className="text-center px-2 py-2 text-[#7D7D7D]">
                    Orders Name
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">State</th>
                  <th className="text-center px-2 text-[#7D7D7D]">City</th>
                  <th className="text-center px-2 text-[#7D7D7D]">Revenue</th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Total orders
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Last Order
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

          {activeTab === "VRs" && (
            <div className="overflow-x-auto">
            <table className="lg:w-[95%] w-full text-[13px] border border-[#D9D9D9]">
              <thead className="">
                <tr>
                  <th className="text-center px-2 py-2 text-[#7D7D7D]">
                    VRs Name
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">State</th>
                  <th className="text-center px-2 text-[#7D7D7D]">City</th>
                  <th className="text-center px-2 text-[#7D7D7D]">Revenue</th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Total orders
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Last Order
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}


          {activeTab === "Reports" && (
            <div className="overflow-x-auto">
            <table className="lg:w-[95%] w-full text-[13px] border border-[#D9D9D9]">
              <thead className="">
                <tr>
                  <th className="text-center px-2 py-2 text-[#7D7D7D]">
                    Reports Name
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">State</th>
                  <th className="text-center px-2 text-[#7D7D7D]">City</th>
                  <th className="text-center px-2 text-[#7D7D7D]">Revenue</th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Total orders
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Last Order
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

         {activeTab === "Invoices" && (
            <div className="overflow-x-auto">
            <table className="lg:w-[95%] w-full text-[13px] border border-[#D9D9D9]">
              <thead className="">
                <tr>
                  <th className="text-center px-2 py-2 text-[#7D7D7D]">
                    Invoices Name
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">State</th>
                  <th className="text-center px-2 text-[#7D7D7D]">City</th>
                  <th className="text-center px-2 text-[#7D7D7D]">Revenue</th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Total orders
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Last Order
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

          {activeTab === "PI" && (
            <div className="overflow-x-auto">
            <table className="lg:w-[95%] w-full text-[13px] border border-[#D9D9D9]">
              <thead className="">
                <tr>
                  <th className="text-center px-2 py-2 text-[#7D7D7D]">
                    PI Name
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">State</th>
                  <th className="text-center px-2 text-[#7D7D7D]">City</th>
                  <th className="text-center px-2 text-[#7D7D7D]">Revenue</th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Total orders
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Last Order
                  </th>
                  <th className="text-center px-2 text-[#7D7D7D]">
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="bg-[#dddddd] h-[30px]">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
       



         
        </div>

        <div className="w-full lg:w-[330px] space-y-4">
          <h1 className="text-center text-[16px] font-semibold text-black m-0">
            11 Oct 23
          </h1>

          <div className="bg-white shadow-sm border border-[#D9D9D9] rounded p-2 relative m-0">
            <div className="absolute left-[109px]! top-6 bottom-6 w-px bg-[#1F3A60]"></div>

            <div className="flex gap-4 mb-4">
              <div className="w-20 text-right">
                <div className="font-medium text-xs text-black">
                  Proposal Sent
                </div>
                <div className="text-xs text-gray-500">05:30 PM</div>
              </div>

              <div className="relative">
                <div className="w-3 h-3 bg-[#1F3A60] rounded-full mt-1"></div>
              </div>

              <div className="text-xs flex-1">
                <p className="font-medium text-black">Discussion Done</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <p>Follow Up : 11 Oct 23 10:30 AM</p>
                <p className="text-right">- Bhimkumar Prasad</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-20 text-right">
                <div className="font-medium text-xs text-black">Interested</div>
                <div className="text-xs text-gray-500">02:30 PM</div>
              </div>

              <div className="relative">
                <div className="w-3 h-3 bg-[#1F3A60] rounded-full mt-1"></div>
              </div>

              <div className="text-xs flex-1">
                <p className="font-medium text-black">Discussion Done</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <p>Follow Up : 11 Oct 23 10:30 AM</p>
                <p className="text-right">- Bhimkumar Prasad</p>
              </div>
            </div>
          </div>

          <h1 className="text-center text-[16px] font-semibold text-black m-0">
            7 Oct 23
          </h1>

          <div className="bg-white shadow-sm border border-[#D9D9D9] rounded p-2 relative m-0">
            <div className="absolute left-[109px]! top-6 bottom-6 w-px bg-[#1F3A60]"></div>

            <div className="flex gap-4 mb-4">
              <div className="w-20 text-right">
                <div className="font-medium text-xs text-black">
                  Proposal Sent
                </div>
                <div className="text-xs text-gray-500">05:30 PM</div>
              </div>

              <div className="relative">
                <div className="w-3 h-3 bg-[#1F3A60] rounded-full mt-1"></div>
              </div>

              <div className="text-xs flex-1">
                <p className="font-medium text-black">Discussion Done</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <p>Follow Up : 11 Oct 23 10:30 AM</p>
                <p className="text-right">- Bhimkumar Prasad</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-20 text-right">
                <div className="font-medium text-xs text-black">Interested</div>
                <div className="text-xs text-gray-500">02:30 PM</div>
              </div>

              <div className="relative">
                <div className="w-3 h-3 bg-[#1F3A60] rounded-full mt-1"></div>
              </div>

              <div className="text-xs flex-1">
                <p className="font-medium text-black">Discussion Done</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <p>Follow Up : 11 Oct 23 10:30 AM</p>
                <p className="text-right">- Bhimkumar Prasad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
