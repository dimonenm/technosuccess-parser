import { Injectable } from '@nestjs/common';
import axios from 'axios'

@Injectable()
export class GetDataService {
	async getData() {
		const res = await axios.get(
      'https://technosuccess.ru/index.php?dispatch=products.search&q=Perfeo&search_performed=Y',
		);
		return res
	}
}
