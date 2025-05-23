'use server'
import IProductUnit from './../interfaces/iProductUnit'

export async function GetProductsRawData() {
  const dataRaw = await fetch('http://localhost:3000/get-data/all')
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

export async function getDataBySearchQuery(searchQuery: string[]) {
  let params: string = ''
  const products: IProductUnit[] = []

  if (searchQuery[0] === '') {
    const data = GetProductsRawData()

    await data.then(res => {
      res.map(iProductUnit => {
        products.push(iProductUnit)
      })
    })

    return products
  }

  searchQuery.forEach(str => {
    params = params + `+${str}`
  })
  const dataRaw = await fetch(
    `http://localhost:3000/get-data/bySearchQuery?q=${params}`
  )
  const dataJson = (await dataRaw.json()) as IProductUnit[]

  dataJson.forEach(iProductUnit => {
    products.push(iProductUnit)
  })

  return products
}
