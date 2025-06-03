import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import IProductUnit from '../interfaces/iProductUnit'
import { Input } from '@/components/ui/input'

interface SearchInputProps {
  setProducts: Dispatch<SetStateAction<IProductUnit[]>>
}

export default function SearchInput({ setProducts }: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div>
      <Input type='email' placeholder='Email' />
    </div>
  )
}
