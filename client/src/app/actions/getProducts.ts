'use server'
import IProductUnit from './../interfaces/iProductUnit'

export async function GetProductsRawData() {
  const dataRaw = await fetch('http://localhost:3000/get-data')
  const dataJson = (await dataRaw.json()) as IProductUnit[]

  return dataJson
}

export async function GetProducts() {
  const data = GetProductsRawData()
  const products: IProductUnit[] = []

  await data.then(res => {
    res.map(iProductUnit => {
      products.push(iProductUnit)
    })
  })

  return products
}
