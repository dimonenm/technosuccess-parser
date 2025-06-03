import { Input } from '@heroui/react'
import { ChangeEvent, useState } from 'react'

export default function FilterInput() {
  const [filterQuery, setFilterQuery] = useState('')

  return (
    <div className='flex w-1/2 justify-center gap-10 mt-10'>
      <Input
        label='Filter query'
        placeholder='Enter what you want to find'
        type='text'
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setFilterQuery(event.target.value)
        }}
        value={filterQuery}
      />
    </div>
  )
}
