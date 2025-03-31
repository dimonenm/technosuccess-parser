import { Controller, Get } from '@nestjs/common';
import { GetDataService } from './get-data.service';

@Controller('get-data')
export class GetDataController {
  constructor(private readonly getDataService: GetDataService) {}

  @Get()
  getData() {
    return this.getDataService.getData();
  }
}
