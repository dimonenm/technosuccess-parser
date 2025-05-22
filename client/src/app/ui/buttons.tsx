'use client'
import { Button, Input } from '@heroui/react'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import IProductUnit from '../interfaces/iProductUnit'
import { GetProducts } from './../actions/getProducts'

interface ButtonsProps {
  setProducts: Dispatch<SetStateAction<IProductUnit[]>>
}

export default function Buttons({ setProducts }: ButtonsProps) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex w-full m-8'>
          <Input
            label='Search query'
            placeholder='Enter what you want to find'
            type='text'
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(event.target.value)
            }}
            value={searchQuery}
          />
        </div>
        <div className='flex flex-wrap gap-4 items-center m-8'>
          <Button color='default'>Default</Button>
          <Button color='primary'>Primary</Button>
          <Button
            color='default'
            onPress={async () => {
              // const data = await GetProducts()
              // console.log('data: ', data)
              setProducts(await GetProducts())
            }}
          >
            Increment
          </Button>
          <Button color='primary'>Decrement</Button>
        </div>
      </div>
    </>
  )
}
