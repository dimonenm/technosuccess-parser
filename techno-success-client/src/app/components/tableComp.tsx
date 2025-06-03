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

interface TableProps {
  setProducts: Dispatch<SetStateAction<IProductUnit[]>>
}

export default function TableComp() {

  return (
    <div></div>
  )
}
