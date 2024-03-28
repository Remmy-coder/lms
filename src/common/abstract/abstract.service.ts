import { Injectable, NotFoundException } from '@nestjs/common';
import { DeepPartial, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export abstract class AbstractService<T> {
  constructor(
    protected readonly repository: Repository<T>,
    private readonly relations?: string[],
  ) {}

  async create(entity: DeepPartial<T>): Promise<T> {
    return this.repository.save(entity);
  }

  async findAll(): Promise<T[]> {
    return this.repository.find({ relations: this.relations });
  }

  async findById(id: string): Promise<T> {
    const options: any = { id };
    const findOptions: FindOneOptions<T> = {
      where: options,
      relations: this.relations,
    };
    const entity = await this.repository.findOne(findOptions);
    if (!entity) {
      throw new NotFoundException('Entity not found');
    }
    return entity;
  }

  async update<D>(id: string, updateDto: D): Promise<T> {
    const options: any = { id };
    const entity = await this.repository.findOne({
      where: options,
      relations: this.relations,
    });

    if (!entity) {
      throw new NotFoundException(`Entity not found!`);
    }

    for (const key of Object.keys(updateDto)) {
      if (updateDto[key] !== undefined) {
        entity[key] = updateDto[key];
      }
    }

    return await this.repository.save(entity);
  }
}
