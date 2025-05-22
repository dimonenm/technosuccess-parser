'use client'
import { Button, Input } from '@heroui/react'

interface AppProps {
  count: number
}

export default function Buttons({ count }: AppProps) {
  console.log('Buttons count: ', count)
  return (
    <>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex w-full m-8'>
          <Input label='Email' placeholder='Enter your email' type='email' />
        </div>
        <div className='flex flex-wrap gap-4 items-center m-8'>
          <Button color='default'>Default</Button>
          <Button color='primary'>Primary</Button>
          <Button
            color='default'
            onPress={() => {
              count = count + 1
              console.log('Buttons count after ', count)
            }}
          >
            Increment
          </Button>
          <Button
            color='primary'
            onPress={() => {
              count = count - 1
            }}
          >
            Decrement
          </Button>
        </div>
      </div>
    </>
  )
}
