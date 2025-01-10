import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';

const App = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center background overflow-x-hidden'>
            <h1 className='bg-white rounded-xl w-11/12 text-center mt-[40px] mx-auto px-10 py-5 text-4xl font-bold'> 
                RANDOM GIFS 
            </h1>
            <div className='flex flex-col items-center gap-y-10 mt-[30px] w-full'>
                <Random/>
                <Tag/>
            </div>
        </div>
    )
}

export default App