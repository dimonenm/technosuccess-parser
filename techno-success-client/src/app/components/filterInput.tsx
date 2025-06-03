import { Input } from '@/components/ui/input'
import { ChangeEvent, useState } from 'react'

export default function FilterInput() {
  const [filterQuery, setFilterQuery] = useState('')

  return (
    <div>
      <Input type='email' placeholder='Email' />
    </div>
  )
}
