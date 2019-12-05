import { Injectable } from '@nestjs/common';
import { InjectRepository, Repository } from '@nestjs/azure-database';
import { IngredientEntity } from './ingredient.entity';

@Injectable()
export class ApiEndpointService {
  @InjectRepository(IngredientEntity)
  private readonly ingredientList: Repository<IngredientEntity>;

  deleteIngredient(ingredient: string, name: string) {
    throw new Error('Method not implemented.');
  }
  addToList(ingredient: string, name: string) {
    const entity = new IngredientEntity();
    entity.who = name;
    entity.what = ingredient;
    throw new Error('Method not implemented.');
  }
  getList() {
    throw new Error('Method not implemented.');
  }
}
