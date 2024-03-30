import React from 'react'
import Logo from '../components/Logo'
import Search from '../components/Search'
import Card from '../components/Card'

export default function SecretSpace() {
  return (
    <>
    <div className='fullscreen-container Lato py-16'>
     <div className='content-container flex flex-col items-center'>
       <Logo/>
       <Search/>
       <div className='my-8'>
          <Card/>
       </div>
      
       



     </div>
   </div>
 
   </>
  )
}
