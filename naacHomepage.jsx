import ServiceItem from "/src/components/saturatoryDataComponents/ServiceItems.jsx"
import Header from "/src/components/saturatoryDataComponents/HeroSection.jsx"
import services from "/src/Data/saturatoryData/services.js"
import HeroSection from "../../components/saturatoryDataComponents/HeroSection"

function Services(){
    return(
        <div className='flex items-center justify-center flex-col py-3'>
        <div className='text-center  py-4 w-screen'>
                    <h1 className='bg-indigo-500 text-slate-50 py-3'>Accreditations/Approvals</h1>
                    </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 w-auto'>
            {
                services.map(services => (
                    <ServiceItem
                    key={services.title}
                    title={services.title}
                    imgUrl={services.imgUrl}
                    description={services.description}  
                    >

                    </ServiceItem>
                ))
            }
        </div>
        </div>
    )
}
export default Services