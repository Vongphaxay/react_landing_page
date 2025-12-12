import React from 'react'

function Info2() {
    return (
        <div className='container mx-auto flex items-center py-16'>
            <div className='w-1/2 px-6'>
                <h2 className='text-3xl font-semibold'>Welcome to Our Website</h2>
                <p className='text-gray mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae aliquam praesentium tempora magni aliquid temporibus, dolorum alias nihil repellendus?</p>
            </div>
            <div className='w-1/2'>
                <img src="https://media.istockphoto.com/id/2209724314/photo/computer-on-desk-in-office.jpg?s=612x612&w=0&k=20&c=IQFOczMCqMs8wyuy7R6vccLqdqh5MU9-PPqtCSSnl7E=" alt="" className='w-full h-auto ml-4 rounded-lg' />
            </div>
        </div>
    )
}

export default Info2
