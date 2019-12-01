import { Injectable } from '@nestjs/common';
import {
  DreidelType,
  DREIDEL_SYMBOL_MAP
} from '@days-of-serverless/api-interfaces';

@Injectable()
export class DreidelService {
  spinDreidel() {
    const dreidelType = [
      DreidelType.Gimmel,
      DreidelType.Hay,
      DreidelType.Nun,
      DreidelType.Shin
    ][Math.floor(Math.random() * 4)];
    return {
      type: dreidelType,
      symbol: DREIDEL_SYMBOL_MAP[dreidelType]
    };
  }
}
