import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import { parse } from 'node-html-parser';

@Injectable()
export class GetDataService {
  async getData() {
    let config = {
      params: {
        search_performed: 'Y',
        q: '16gb perfeo',
        dispatch: 'products.search',
        page: '2'
      },
      headers: {
        cookie: 'sid_customer_733c5=1b089ec0915b3f3a39e8d595e231def0-1-C',
      },
    };
    
    const res = await axios.get('https://technosuccess.ru', config);



    const root = parse(res.data);
    console.log(root.querySelector('.pagination')?.querySelectorAll('li').length);
    return res.data;
  }
}
