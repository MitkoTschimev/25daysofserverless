import { Module } from '@nestjs/common';
import { DreidelService } from './dreidel/dreidel.service';
import { DreidelController } from './dreidel/dreidel.controller';

@Module({
  providers: [DreidelService],
  controllers: [DreidelController]
})
export class DreidelModule {}
