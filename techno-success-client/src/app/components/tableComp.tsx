import { Dispatch, SetStateAction } from 'react'
import IProductUnit from '../interfaces/iProductUnit'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'


interface TableCompProps {
  products: IProductUnit[]
}

export default function TableComp({ products }: TableCompProps) {

  if (products.length === 0) {
    return <div>no results</div>
  }
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-40'>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className='text-right'>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map(item => (
              <TableRow key={item.key} className='h-40'>
                <TableCell>
                  <Image
                    src={`${item.imgUrl}`}
                    alt={`${item.key}`}
                    width={150}
                    height={150}
                  ></Image>
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className='text-right'>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell className='text-right'>$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    )
}
