import { Button, Input } from '@heroui/react'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import IProductUnit from '../interfaces/iProductUnit'

interface SearchInputProps {
  setProducts: Dispatch<SetStateAction<IProductUnit[]>>
}

export default function SearchInput({ setProducts }: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState('')

	return (
    <div className='flex w-1/2 justify-center gap-5 mt-5'>
      <Input
        label='Search query'
        placeholder='Enter what you want to find'
        type='text'
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(event.target.value)
        }}
        value={searchQuery}
      />
      <Button color='default'>Default</Button>
    </div>
  )
}
