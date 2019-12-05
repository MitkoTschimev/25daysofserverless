import { Controller, Get, Post, Delete } from '@nestjs/common';
import { ApiEndpointService } from './api-endpoint.service';

@Controller('api-endpoint')
export class ApiEndpointController {
  constructor(private apiEndpointService: ApiEndpointService) {}

  @Get()
  retrieveList() {
    return this.apiEndpointService.getList();
  }

  @Post()
  addToList(ingredient) {
    return this.apiEndpointService.addToList(ingredient, name);
  }

  @Delete()
  deleteFromList(ingredient) {
    return this.apiEndpointService.deleteIngredient(ingredient, name);
  }
}
