import { Module } from '@nestjs/common';

import { DreidelModule } from './dreidel/dreidel.module';

@Module({
  imports: [DreidelModule]
})
export class AppModule {}
