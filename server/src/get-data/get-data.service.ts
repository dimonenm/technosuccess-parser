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
    return newProduct;
  });
  return newProducts;
}

@Injectable()
export class GetDataService {
  async getData() {
    // let config = {
    //   params: {
    //     search_performed: 'Y',
    //     q: 'Perfeo USB 16GB C01G2',
    //     dispatch: 'products.search',
    //     items_per_page: 10000,
    //   },
    //   headers: {
    //     cookie: 'sid_customer_733c5=a6640fadc4161af7dc5dd92f3c35d5e2-1-C',
    //   },
    // };
    let config = {
      params: {
        search_performed: 'Y',
        q: 'Perfeo USB 16GB C01G2',
        dispatch: 'products.search',
        items_per_page: 100,
      },
      headers: {
        cookie: 'sid_customer_733c5=a6640fadc4161af7dc5dd92f3c35d5e2-1-C',
      },
    };

    const res = await axios.get('https://technosuccess.ru', config);

    const config2 = {
      params: {
        search_performed: 'Y',
        q: 'Perfeo USB 16GB C01G2',
        dispatch: 'products.search',
        items_per_page: 100,
      },
      headers: {
        'authority': 'technosuccess.ru',
        'method': 'POST',
        'path':
          '/?subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=16gb&dispatch=products.search&security_hash=6f66b9148c93b4785164eb6fc5ac87f2',
        'scheme': 'https',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'ru,en;q=0.9',
        'cache-control': 'no-cache',
        'content-length': 1946,
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',

        cookie:
          '__ddg1_=ppaw1GsU36RUYv3fCCM7; _ym_uid=1742715546302875130; _ym_d=1742715546; __ddgid_=3ZJrOygajnOHCd2S; __ddg2_=NLUVF34Vkt9nAFMv; sid_customer_733c5=a6640fadc4161af7dc5dd92f3c35d5e2-1-C; cookies_policy=true; _ym_isad=1; _ym_visorc=w; __ddg9_=80.245.118.134; __ddg10_=1749081353; __ddg8_=M9RcU51NzTCfYo9u',
        origin: 'https://technosuccess.ru',
        pragma: 'no-cache',
        priority: 'u=1, i',
        referer:
          'https://technosuccess.ru/?subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=16gb&dispatch=products.search&security_hash=6f66b9148c93b4785164eb6fc5ac87f2',
        'sec-ch-ua':
          '"Chromium";v="134", "Not:A-Brand";v="24", "YaBrowser";v="25.4", "Yowser";v="2.5"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 YaBrowser/25.4.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
      },
    };

    const res2 = await axios.post(
      'https://technosuccess.ru',
      {
        price: 'cat_ids',
        send_ids: ['7249227', '9241273'],
      },
      config2,
    );
    console.log('res2: ', res2);

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

    return JSON.stringify(fixText(products));
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

    return JSON.stringify(fixText(products));
  }
}
