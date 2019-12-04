import { EntityPartitionKey, EntityRowKey, EntityString } from '@nestjs/azure-database';

@EntityPartitionKey('PictureId')
@EntityRowKey('PictureName')
export class PictureEntity {
  @EntityString() url: string;
}
