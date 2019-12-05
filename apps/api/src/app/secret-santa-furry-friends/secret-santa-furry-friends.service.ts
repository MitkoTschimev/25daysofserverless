import { Injectable } from '@nestjs/common';
import { PictureEntity } from './dto/picture.entity';
import { InjectRepository, Repository } from '@nestjs/azure-database';

@Injectable()
export class SecretSantaFurryFriendsService {
  constructor(
    @InjectRepository(PictureEntity)
    private readonly pictureTable: Repository<PictureEntity>
  ) {}

  sendPicturesToDb(commits: { added: string[] }[], htmlUrlPath: string) {
    commits.forEach(commit => {
      commit.added.forEach(filePath => {
        if (filePath.endsWith('.png')) {
          return this.addToDb(`${htmlUrlPath}/blob/master/${filePath}`);
        }
      });
    });
  }

  private addToDb(filePath: string): Promise<PictureEntity> {
    const entity = new PictureEntity();
    entity.url = filePath;
    return this.pictureTable.create(entity);
  }
}
