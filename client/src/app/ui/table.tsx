'use client'
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from '@heroui/table'
import { Image } from '@heroui/react'
import IProductUnit from './../interfaces/iProductUnit'

const columns = [
  {
    key: 'img',
    label: 'Изображение',
  },
  {
    key: 'name',
    label: 'Название',
  },
  {
    key: 'price',
    label: 'Цена',
  },
]


export default function MainTable({ products }: { products: IProductUnit[] }) {
  
  return (
    <Table
      aria-label='Example table with dynamic content'
      className='min-w-fit'
    >
      <TableHeader columns={columns}>
        {column => {
          return <TableColumn key={column.key}>{column.label}</TableColumn>
        }}
      </TableHeader>
      <TableBody items={products}>
        {item => {
          return (
            <TableRow key={item.key}>
              <TableCell>
                <Image alt={item.name} src={item.imgUrl} width={100} />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
            </TableRow>
          )
        }}
      </TableBody>
    </Table>
  )
}
