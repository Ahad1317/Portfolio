import gifImage from "../../assets/gif.gif";
const Computers = () => {
  return (
    <div className='flex justify-center'>
        <img src={gifImage} alt="Your GIF" className="lg:w-[470px] md:w-[500px] w-80 mt-80 md:mt-96 md:mb-10 mb-8 lg:mb-0 lg:mt-80 rounded-xl border-white border-[3px]"/>
      </div>
  )
}

export default Computers