import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        className="rounded-md focus:outline-none py-2"
        onClick={toggle}
      >
        Select an option
      </button>
      <div className='mt-2'>
      {isOpen && (
        <div className="absolute  mt-4 py-8 bg-white rounded-md shadow-xl">
          <div className="py-1">
            <a href="#AICTEMandatoryDisclosure"  id ='AICTEMandatoryDisclosure-tab'className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
              Option 1
            </a>
          </div>
          <div className="py-1">
          <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
              Option 1
            </a>
            </div>
            <div>
            <div className="tab-pane fade show active" id="AICTEMandatoryDisclosure" role="tabpanel" aria-labelledby="AICTEMandatoryDisclosure-tab">
        <div className='mt-4'>
          <h1 className='text-start py-2 text-xl text-neutral-900'>AICTE MANDATORY DISCLOSURE</h1>
            <embed src="/src/assets/saturatoryData/AICTE_Mandatory_Disclosure.pdf" width={800} height={400}>
            </embed> 
        </div>
      </div>
            </div>
            </div>
             )}
             </div>
            </div>
            )}
export default Dropdown