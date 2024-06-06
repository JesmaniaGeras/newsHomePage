import React from 'react'

const Hero = () => {
  return (
    <section className='max-w-[1440px] px-4 mx-auto flex-col md:grid grid-cols-3 gap-7'>
        {/* Lado izquier1do */}
        <div className='col-span-2 flex-col'>
            <div>
                <img src="../image-web-3-desktop.jpg" alt="" className=''/>
            </div>
            <div className='grid md:grid-cols-2 py-4'>
                <div className='w-[60%] md:w-[80%]'>
                    <h1 className='text-4xl md:text-6xl font-extrabold'>The Bright Future of Web 3.0?</h1>
                </div>
                <div className='flex-col content-around'>
                    <div className='py-4'>
                        <p> 
                            We drive intop the next evolution of the web that
                            claims to put the power of the platforms black
                            into the hands of the people. But is it really
                            fulfilling its promise? 
                        </p>
                    </div>
                    <div className=''>
                        <button className='bg-soft-red px-8 py-3 font-semibold tracking-widest hover:bg-very-dark-blue hover:text-off-white transition-all duration-300 ease-in'>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Lado derecho */}
        <div className='h-full flex flex-col bg-very-dark-blue text-off-white px-8 py-6 justify-center-center'>
            <h2 className='text-soft-orange text-4xl font-bold mb-7'>New</h2>
            <div className='flex flex-col h-full justify-around gap-5'>
                <div className='flex flex-col content-center justify-center gap-3 border-b'>
                    <a href='' className='hover:text-soft-orange transition-all duration-300 ease-in font-bold text-xl'>Hydrogen VS Electric Cars</a>
                    <p className='text-dark-grayish-blue text-[15px] mb-8'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div className='flex flex-col content-center gap-3 border-b'>
                    <a href='' className='hover:text-soft-orange transition-all duration-300 ease-in font-bold text-xl'>The Downsides of AI Artistry</a>
                    <p className='text-dark-grayish-blue text-[15px] mb-8'>What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div className='flex flex-col content-center gap-3'> 
                    <a href='' className='hover:text-soft-orange transition-all duration-300 ease-in font-bold text-xl'>Is VC Funding Drying Up?</a>
                    <p className='text-dark-grayish-blue text-[15px]'>Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero