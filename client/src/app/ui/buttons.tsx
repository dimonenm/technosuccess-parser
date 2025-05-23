'use client'
import { Button, Input } from '@heroui/react'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import IProductUnit from '../interfaces/iProductUnit'
import { GetProducts, getDataBySearchQuery } from './../actions/getProducts'

interface ButtonsProps {
  setProducts: Dispatch<SetStateAction<IProductUnit[]>>
}

function ClearProducts(setProducts: Dispatch<SetStateAction<IProductUnit[]>>) {
  setProducts([])
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
              setProducts(await GetProducts())
            }}
          >
            Increment
          </Button>
          <Button
            color='primary'
            onPress={async () => {
              ClearProducts(setProducts)
              setProducts(await getDataBySearchQuery(searchQuery.split(' ')))
            }}
          >
            Decrement
          </Button>
        </div>
      </div>
    </>
  )
}
