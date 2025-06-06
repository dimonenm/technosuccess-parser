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
  console.log('products in TableComp: ', products)

  if (products.length === 0) {
    return <div>no results</div>
  }
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className='text-right'>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map(item => (
              <TableRow key={item.key}>
                <TableCell>
                  <Image
                    src={`${item.imgUrl}`}
                    alt={`${item.key}`}
                    width={75}
                    height={75}
                  ></Image>
                </TableCell>
                <TableCell className='whitespace-normal'>{item.name}</TableCell>
                <TableCell className='text-right'>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell className='text-right'>{products.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    )
}
