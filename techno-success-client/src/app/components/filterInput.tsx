import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChangeEvent, useState } from 'react'

export default function FilterInput() {
  const [filterQuery, setFilterQuery] = useState('')

  return (
    <div className='flex my-5 gap-5'>
      <Input
        type='text'
        placeholder='Enter what you want to find'
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setFilterQuery(event.target.value)
        }}
        value={filterQuery}
      />
      <Button
        variant={'default'}
        size={'default'}
        className='bg-neutral-600 border-b-black border-2 hover:bg-neutral-300 transition-colors delay-75 ease-in-out'
      >
        Filter
      </Button>
    </div>
  )
}
