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
  const prod = [
    {
      key: '0',
      imgUrl:
        'https://technosuccess.ru/images/thumbnails/360/360/detailed/11125/5H3j4i1e_1739181568.png',
      name: 'Флешка Perfeo USB 16GB C01G2 чёрная',
      price: '251',
    },
    {
      key: '1',
      imgUrl:
        'https://technosuccess.ru/images/thumbnails/360/360/detailed/11125/9d4D7n8S_1739181603.png',
      name: 'Флешка Perfeo USB 16GB C01G2 красная',
      price: '251',
    },
    {
      key: '2',
      imgUrl:
        'https://technosuccess.ru/images/thumbnails/360/360/detailed/11125/4u4q8j7C_1739181633.png',
      name: 'Флешка Perfeo USB 16GB C01G2 Белая',
      price: '251',
    },
  ]

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
            {prod.map(item => (
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
