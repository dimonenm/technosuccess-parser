import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { parse } from 'node-html-parser';
import IProductUnit from './interfaces/iProductUnit';

@Injectable()
export class GetDataService {
  async getData() {
    let config = {
      params: {
        search_performed: 'Y',
        q: '16gb perfeo',
        dispatch: 'products.search',
        page: '2',
      },
      headers: {
        cookie: 'sid_customer_733c5=1b089ec0915b3f3a39e8d595e231def0-1-C',
      },
    };

    const res = await axios.get('https://technosuccess.ru', config);

    const root = parse(res.data);
    console.log(
      root.querySelector('.pagination')?.querySelectorAll('li').length,
    );

    const products: IProductUnit[] = [];

    root.querySelectorAll('form.category-list-item').forEach((item) => {
      const product: IProductUnit = {
        imgUrl: item.querySelector('.ty-previewer')?.attrs.href,
        name: item.querySelector('.product-title')?.innerText,
        price: item.querySelector('.ty-price-num')?.innerText,
      };
      products.push(product)
    });

    const list = root.querySelectorAll('form.category-list-item');
    return list?.toString();
    // return res.data;
  }
}
