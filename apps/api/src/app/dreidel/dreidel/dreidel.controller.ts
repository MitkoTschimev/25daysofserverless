import { Controller, Get } from '@nestjs/common';
import { DreidelService } from './dreidel.service';

@Controller('dreidel')
export class DreidelController {
  constructor(private dreidelService: DreidelService) {}

  @Get('spin')
  playDreidel() {
    return this.dreidelService.spinDreidel();
  }
}
