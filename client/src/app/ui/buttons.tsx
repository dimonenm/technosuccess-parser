'use client'
import { Button, Input } from '@heroui/react'

export default function Buttons() {
  return (
    <>
      <div className='flex flex-wrap gap-4 items-center h-24'>
        <Button color='default'>Default</Button>
        <Button color='primary'>Primary</Button>
        <Button color='secondary'>Secondary</Button>
        <Button color='success'>Success</Button>
        <Button color='warning'>Warning</Button>
        <Button color='danger'>Danger</Button>
      </div>
      {/* <div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
        <Input label='Email' type='email' />
        <Input label='Email' placeholder='Enter your email' type='email' />
      </div> */}
    </>
  )
}
