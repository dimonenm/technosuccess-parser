import { Injectable } from '@nestjs/common';
import axios from 'axios'

@Injectable()
export class GetDataService {
	async getData() {
		let config = {
      headers: {
        Cookie:
          '__ddg1_=ppaw1GsU36RUYv3fCCM7; _ym_uid=1742715546302875130; _ym_d=1742715546; _ym_isad=1; __ddgid_=3ZJrOygajnOHCd2S; __ddgmark_=rkBc4Tk178uVwwCm; __ddg2_=NLUVF34Vkt9nAFMv; __ddg9_=185.24.9.76; _ym_visorc=w; __ddg8_=9iHg1tjeGPPVLEZ8; __ddg10_=1743630848; sid_customer_733c5=1b089ec0915b3f3a39e8d595e231def0-1-C',
      },
    };
		const res = await axios.get(
      // 'https://technosuccess.ru/index.php?dispatch=products.search&q=Perfeo&search_performed=Y',
      'https://technosuccess.ru/index.php?subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=16gb&dispatch=products.search&security_hash=b4c27e1016cfda544eceb418afd72331',
      config
    );
		console.log('res: ', res.headers);
		return res.data;
	}
}
