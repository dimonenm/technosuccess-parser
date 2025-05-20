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
const rows = [
  {
    key: '1',
    imgUrl:
      'https://technosuccess.ru/images/thumbnails/360/360/detailed/10832/9227321_0_1736971524.png',
    name: 'Сетевой фильтр Perfeo Real Stream 1,8м (5 розеток) 16А Белый',
    price: '450',
  },
  {
    key: '2',
    imgUrl:
      'https://technosuccess.ru/images/thumbnails/360/360/detailed/152/PF-R03-4BL-WEB-600x600.jpg',
    name: 'Эл. питания Perfeo R03/4BL Dynamic Zinc',
    price: '65',
  },
  {
    key: '3',
    imgUrl:
      'https://technosuccess.ru/images/thumbnails/360/360/detailed/11062/7210518_0_1738526620.jpg',
    name: 'Flash Drive 32GB USB 3.0 Perfeo S05 Black (PF-S05B032)',
    price: '450',
  },
  {
    key: '4',
    imgUrl:
      'https://technosuccess.ru/images/thumbnails/360/360/detailed/364/perfeo_setevoj_udlinitel_s_knopkoj_powermate_30m_3_rozetki_pf-pm-3-30-w_pf_a4676chernyj2.jpg',
    name: 'Удлинитель с заземлением Perfeo &quot;POWERMATE&quot;, 1,8м, 3 розетки, черный (PF-PM-3/1,8-B)',
    price: '240',
  },
  {
    key: '5',
    imgUrl:
      'https://technosuccess.ru/images/thumbnails/360/360/detailed/6037/6f377247f627a7d4caf7e6097c541f06-380x380.webp',
    name: 'Perfeo ТВ антенна &quot;PORTAL&quot;, активная, встр. усилитель, блок питания, DVB-T2 (PF-TV2020)(BAS-5107)',
    price: '651',
  },
  {
    key: '6',
    imgUrl:
      'https://technosuccess.ru/images/thumbnails/360/360/detailed/6411/PF_D0185.JPG',
    name: 'Perfeo защитное стекло Xiaomi Redmi 10C/12C/POCO C40 черный Full Screen&amp;Glue',
    price: '60',
  },
]

export default function MainTable() {
  return (
    <Table aria-label='Example table with dynamic content' className='min-w-fit'>
      <TableHeader columns={columns}>
        {column => {
          return <TableColumn key={column.key}>{column.label}</TableColumn>
        }}
      </TableHeader>
      <TableBody items={rows}>
        {item => {
          console.log('item: ', item)
          return (
            <TableRow key={item.key}>
              <TableCell>
                <Image
                  alt={item.name}
                  src={item.imgUrl}
                  width={100}
                />
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
