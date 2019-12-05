import {
  EntityPartitionKey,
  EntityRowKey,
  EntityString
} from '@nestjs/azure-database';

@EntityPartitionKey('IngredientId')
@EntityRowKey('IngredientName')
export class IngredientEntity {
  @EntityString() who: string;
  @EntityString() what: string;
}
