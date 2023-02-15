import { Link } from "react-router-dom";


function ServiceItem({imgUrl, title, description}){
    return(
          <div className="p-4 col  w-300 px-2">       
        <div className='rounded-lg overflow-hidden shadow-xl h-10.1 w-full py-1'>
            <img src={imgUrl} alt={title} className='w-full h-40 md:h-48  rounded-t-lg' />
            <div className='p-1 w-auto bg-white'>
                <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold h-6'>{title}</h3>
                <div className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                        <div className='inline-block px-1 py-1 bg-white rounded-md h-22'>{description}</div>
                        <div className='m-0.5'>
                        <Link to={"/naacInfo"} className='p-40 py-1 text-right underline hover:no-underline
                   text-blue-600 hover:text-blue-800 visited:text-purple-600"'>viewmore</Link> 
                </div>
            </div>
        </div>
        </div>
     </div>
    

        
    
        
    )
}
export default ServiceItem