import props from 'prop-types'
const Footer = ({theme}) => {
    const serviceArr = ['Product Support', 'Order Tracking', 'Shipping & Delivery', 'Returns']
    const companyArr = ['About Us', 'Careers', 'Contact']
    const legal = ['Terms and Condition', 'Provacy and Policy', 'Cookie Policy']
  return (
    <div className={`w-full p-5 flex font-sora items-center justify-center flex-col ${theme === true ? 'bg-zinc-800' : 'bg-zinc-300'}`}>
        <p className="text-2xl font-semibold">GadgetHeaven</p>
        <p className="text-center">Leading the way in cutting-edge technology and innovation.</p>
        <hr className="border-2 rounded-full w-full my-10" />
        <div id="menu-items" className='grid gap-4 lg:gap-0 w-[80%] md:w-[70%] mx-auto text-center grid-cols-1 lg:grid-cols-3'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-lg font-semibold'>Services</h1>
                <ul className='flex flex-col gap-3'>
                    {serviceArr.map(item => (
                        <li key={Math.random()} className='cursor-pointer'>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-lg font-semibold'>Company</h1>
                <ul className='flex flex-col gap-3'>
                    {companyArr.map(item => (
                        <li key={Math.random()} className='cursor-pointer'>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-lg font-semibold'>Legal</h1>
                <ul className='flex flex-col gap-3'>
                    {legal.map(item => (
                        <li key={Math.random()} className='cursor-pointer'>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
Footer.propTypes = {
    theme:  props.bool

}
export default Footer