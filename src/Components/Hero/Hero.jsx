import banner from './banner.jpg'
const Hero = () => {
  return (
    <div className=" h-[70vh] mb-[30%] md:mb-[400px] w-full p-2">
      <div
        id="container"
        className="border-2 w-full rounded-xl border-purple-400 h-full p-2"
      >
        <div className="flex flex-col relative items-center justify-center text-center w-full h-full bg-gradient-to-t from-purple-400 to-purple-200 rounded-xl">
            <div id="text" className="flex flex-col items-center justify-center gap-4">
                <p className="text-xl lg:text-2xl font-bold text-zinc-100">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</p>
                <p className="text-zinc-100 px-10">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="btn rounded-lg">Shop Now</button>
            </div>
            <div className="border-2 backdrop-blur-md absolute top-[520px] border-zinc-100 mx-auto w-[70%] md:w-[700px] rounded-lg p-5 flex items-center justify-center">
                <img src={banner} alt="" className='w-full rounded-lg' />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
