import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import IProductUnit from '../interfaces/iProductUnit'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { GetDataBySearchQuery } from '../actions/getProducts'

interface SearchInputProps {
  setProducts: Dispatch<SetStateAction<IProductUnit[]>>
}

export default function SearchInput({ setProducts }: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <div className='flex my-5 gap-5'>
      <Input
        type='text'
        placeholder='Enter what you want to find'
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(event.target.value)
        }}
        value={searchQuery}
      />
      <Button
        variant={'default'}
        size={'default'}
        className='bg-neutral-600 border-b-black border-2 hover:bg-neutral-300 transition-colors delay-75 ease-in-out'
        onClick={async () => {
          setProducts(await GetDataBySearchQuery(searchQuery.split(' ')))
        }}
      >
        Search
      </Button>
    </div>
  )
}
