import React from 'react'
import { invoicesLayoutProps } from 'features/invoices/types'
import { Sidebar } from './components'

export const CreateInvoiceLayout = ({children}: invoicesLayoutProps) => {
  return (
    <div className='flex'>
        <div className="xl:w-[200px] lg:w-[190px] md:w-[170px] sm:w-[130px] w-[70px]  fixed top-16 left-0 z-40 flex flex-col h-[calc(100vh-60.64px)]  ">
            <Sidebar />
        </div>
        <div className="w-full ml-[220px] mt-10">{children}</div>
       

    </div>
  )
}

export default CreateInvoiceLayout