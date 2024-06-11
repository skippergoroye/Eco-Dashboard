import React from 'react'

export default function() {

  const currentYear = new Date().getFullYear();
  return (
    <div className='flex items-center justify-center text-[#474747] bg-gray-50 py-4'>
        &copy; {currentYear} Eco Africa. All rights reserved.
    </div>
  )
}
