import React from 'react'

const Content = () => {
  return (
    <section className='max-w-[1440px] mx-auto mt-8 mb-12 grid md:grid-cols-3 gap-5 px-4 items-center'>
    <div className='flex gap-6 items-center'>
        <div className='flex-shrink-0'>
            <img src="../image-retro-pcs.jpg" alt="" className='object-cover'/>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-soft-red text-4xl font-bold'>01</p>
            <a href='' className='text-very-dark-blue font-bold text-xl hover:text-soft-red transition-all duration-300 ease-in'>Reviewing Retro PCs</a>
            <p>What happens when old PCs are given modern upgrades?</p>
        </div>
    </div>
    <div className='flex gap-6 items-center'>
        <div className='flex-shrink-0'>
            <img src="../image-top-laptops.jpg" alt="" className='object-cover'/>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-soft-red text-4xl font-bold'>02</p>
            <a href='' className='text-very-dark-blue font-bold text-xl hover:text-soft-red transition-all duration-300 ease-in'>Top 10 Laptops of 2022</a>
            <p>Our best pick for various needs and budgets</p>
        </div>
    </div>
    <div className='flex gap-6 items-center'>
        <div className='flex-shrink-0'>
            <img src="../image-gaming-growth.jpg" alt="" className='object-cover'/>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-soft-red text-4xl font-bold'>03</p>
            <a href='' className='text-very-dark-blue font-bold text-xl hover:text-soft-red transition-all duration-300 ease-in'>The Growth of Gaming</a>
            <p>How the pandemic has sparked fresh opportunities</p>
        </div>
    </div>
</section>

  )
}

export default Content