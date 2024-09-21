import React from 'react'
import WarningIcon from '@mui/icons-material/Warning';
const page = () => {
  return (
    <div>
      <main className='m-52 flex justify-center items-center'>
        <div className='h-3/6 w-1/2 border-2 shadow-lg shadow-black-500/50 rounded-lg' >
        <div>
            
             <div className='text-yellow-400 p-24 flex items-center justify-center'>
                <div className='text-center	'>
                <WarningIcon  sx={{ fontSize: 120 }}
                />
                 <h2 className='pt-4 text-black text-xl font-bold'>page Not Found</h2>
                 <p className='text-md font-medium text-black pb-4'> The page you are looking for does not exist </p>
                 <button className='bg-blue-700 text-white p-2 rounded-md'>
                    Go Home
                 </button>
                 </div>
                </div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default page
