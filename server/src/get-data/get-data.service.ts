import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { parse } from 'node-html-parser';
import IProductUnit from './interfaces/iProductUnit';

function fixText(oldProducts: IProductUnit[]): IProductUnit[] {
  const newProducts: IProductUnit[] = oldProducts.map((product) => {
    const newProduct: IProductUnit = {
      key: product.key,
      imgUrl: product.imgUrl,
      name: product.name?.replaceAll('&quot;', '"'),
      price: product.price?.replaceAll('&nbsp;', ''),
    };
    return newProduct
  });
  return newProducts
}

@Injectable()
export class GetDataService {
  async getData() {
    let config = {
      params: {
        search_performed: 'Y',
        // q: 'Perfeo USB 16GB C01G2',
        dispatch: 'products.search',
        items_per_page: 10000,
      },
      headers: {
        cookie: 'sid_customer_733c5=a6640fadc4161af7dc5dd92f3c35d5e2-1-C',
      },
    };

    const res = await axios.get('https://technosuccess.ru', config);

    const root = parse(res.data);

    const products: IProductUnit[] = [];

    root.querySelectorAll('form.category-list-item').forEach((item, index) => {
      const product: IProductUnit = {
        key: String(index),
        imgUrl: item.querySelector('.ty-previewer')?.attrs.href,
        name: item.querySelector('.product-title')?.innerText,
        price: item.querySelector('.ty-price-num')?.innerText,
      };
      products.push(product);
    });
    console.log('products count ', products.length);

    return JSON.stringify(fixText(products))
  }

  async getDataBySearchQuery(searchQuery: string) {

    let config = {
      params: {
        search_performed: 'Y',
        q: searchQuery,
        dispatch: 'products.search',
        items_per_page: 10000,
      },
      headers: {
        cookie: 'sid_customer_733c5=2e7a0f656f8f07ceff452ce4c831ad8e-1-C',
      },
    };

    const res = await axios.get('https://technosuccess.ru', config);

    const root = parse(res.data);

    const products: IProductUnit[] = [];

    root.querySelectorAll('form.category-list-item').forEach((item, index) => {
      const product: IProductUnit = {
        key: String(index),
        imgUrl: item.querySelector('.ty-previewer')?.attrs.href,
        name: item.querySelector('.product-title')?.innerText,
        price: item.querySelector('.ty-price-num')?.innerText,
      };
      products.push(product);
    });
    console.log('products count ', products.length);

    return JSON.stringify(fixText(products))
  }
}
