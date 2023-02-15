import React, { useState } from 'react';
function Naac () {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [showDroupdown, setShowDroupdown] = React.useState(false)
  const onDropdownClick = () => setShowDroupdown(!showDroupdown)

    return(
        <div className='flex items-center justify-center flex-col py-3'>
<div className='text-center  py-3 w-screen'>
            <h1 className='bg-indigo-500 text-slate-50 py-3'>AICTE DETAILS</h1>
            </div>
<div className='row w-screen'>
    <div className="col-3">
        <div className="nav flex-column nav-pills text-sm" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <div className='nav flex-column nav-pills text-left py-10 justify-items-start p-4' id='tab' role="tablist">
                <a className="nav-link bg-slate-400 text-black mb-1" id="AICTEMandatoryDisclosure-tab" data-toggle="pill" href="#AICTEMandatoryDisclosure" role="tab" aria-controls="AICTEMandatoryDisclosure" aria-selected="false">AICTE Mandatory Disclosure</a>
                <a className="nav-link bg-slate-400 mb-1" id="AICTEApproval-tab" data-toggle="pill" href="#AICTEApproval" role="tab" aria-controls="AICTEApproval" aria-selected="false">AICTE Approval</a>
                <a className="nav-link bg-slate-400 mb-1" id="Undertaking-tab" data-toggle="pill" href="#Undertaking" role="tab" aria-controls="Undertaking" aria-selected="false">Undertaking</a>
                <a className="nav-link bg-slate-400 mb-1" id="AICTEEOA’S-tab" data-toggle="pill" href="#AICTEEOA’S" role="tab" aria-controls="AICTEEOA’S" aria-selected="false">AICTE EOAS</a>
            </div>
        </div>
    </div>

<div className="flex left-navcontent">
    <div className="tab-content" id="tabContent">
      <div className="tab-pane fade show active" id="AICTEMandatoryDisclosure" role="tabpanel" aria-labelledby="AICTEMandatoryDisclosure-tab">
        <div className='mt-4'>
          <h1 className='text-start py-2 text-xl text-neutral-900'>AICTE MANDATORY DISCLOSURE</h1>
            <embed src="/src/assets/saturatoryData/AICTE_Mandatory_Disclosure.pdf" width={800} height={400}>
            </embed> 
        </div>
      </div>
      <div className="tab-pane fade mt-5" id="AICTEApproval" role="tabpanel" aria-labelledby="AICTEApproval-tab">
      <embed src="/src/assets/saturatoryData/BCE1644564782435.pdf" width={800} height={400}>
            </embed>
      </div>
      <div className="tab-pane fade mt-5" id="Undertaking" role="tabpanel" aria-labelledby="Undertaking-tab">
      <embed src="/src/assets/saturatoryData/BCE1644564782435.pdf" width={800} height={400}>
            </embed>
      </div>
      <div className="tab-pane fade mt-3" id="AICTEEOA’S" role="tabpanel" aria-labelledby="AICTEEOA’S-tab">
      <h1 className='text-start py-2 text-xl text-neutral-900'>AICTEEOA</h1>
<div className='flex '><p className='flex justify-center p-1 text-blue-500'>Extension of Approval EOA: 2022-23</p>
<div className="relative flex justify-center items-center gap-3">
    <button className="relative flex justify-cwenter items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group">
        <p className="px-4">Dropdown</p>
        <span className="border-l p-2 hover:bg-gray-100">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                </path>
                </svg>
        </span>
        <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded" id="top">
            <ul className="text-left border rounded">
                <li href="#pdf1" className="px-4 py-1 hover:bg-gray-100 border-b">2021-2022</li>
                <li href="#" className="px-4 py-1 hover:bg-gray-100 border-b">2021-2022</li>
                <li href="#" className="px-4 py-1 hover:bg-gray-100 border-b">2021-2022</li>
                <li href="#" className="px-4 py-1 hover:bg-gray-100 border-b">2021-2022</li>
                <li href="#" className="px-4 py-1 hover:bg-gray-100 border-b">2021-2022</li>
                <li href="#" className="px-4 py-1 hover:bg-gray-100 border-b">2021-2022</li>
                <li href="#" className="px-4 py-1 hover:bg-gray-100 border-b">2021-2022</li>
                <li href="#" className="px-4 py-1 hover:bg-gray-100 border-b">2021-2022</li>
                <li href="#" className="px-4 py-1 hover:bg-gray-100 border-b">2021-2022</li>
            </ul>
        </div>
         </button>
         
</div>


{/*<button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown">Dropdown button <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<div class="absolute bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
    <div class="px-4 py-3">
      <span class="block text-sm">Bonnie Green</span>
      <span class="block text-sm font-medium text-gray-900 truncate">name@flowbite.com</span>
    </div>
    <ul class="py-1" aria-labelledby="dropdown">
      <li>
        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
      </li>
      <li>
        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
      </li>
      <li>
        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
      </li>
      <li>
        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
      </li>
    </ul>
</div>
</p>
{/*<div className="inline-flex bg-white border rounded-md">
            <a
                href="#"
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
            >
                Option
            </a>

            <div className="relative">
                <button
                    type="button"
                    className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                <div className="hidden right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                    <div className="p-2">
                        <a
                            href="/src/assets/saturatoryData/undertaking.pdf"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            ReactJS Dropdown 1
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            ReactJS Dropdown 2
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            ReactJS Dropdown 3
                        </a>
                    </div>
                </div>
            </div>
        </div></p>

  {/* <div className='px-40'>
  <div className="flex flex-row">
      <select className="py-2 px-4 rounded" onChange={handleChange}>
        <option value="">Please select</option>
        <option value="option1" id='pdf1'>Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {selectedValue && <p className="pl-2">Selected Value : {selectedValue} <embed src="/src/assets/saturatoryData/BCE1644564782435.pdf" width={800} height={400}>
            </embed></p>}
    </div>
     </div> */}
    
     

      {/*<embed src="/src/assets/saturatoryData/BCE1644564782435.pdf" width={800} height={400}>
            </embed>*/}
      </div>
        
     {/* <div className="bg-indigo-600 w-40 p-2  flex items-center justify-center rounded">
      select
      <BiChevronDown size={20} />
     </div> */}
</div>
    </div>
  </div>
  <div className="tab-pane fade mt-5" id="pdf1" role="tabpanel">
      <embed src="/src/assets/saturatoryData/BCE1644564782435.pdf" width={800} height={400}>
            </embed>
      </div>
</div>

</div>
)}

export default Naac