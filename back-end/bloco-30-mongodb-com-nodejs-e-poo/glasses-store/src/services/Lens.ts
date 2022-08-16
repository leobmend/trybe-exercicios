import IService from '../interfaces/IService';
import ILens, { lensZodSchema } from '../interfaces/ILens';
import IModel from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class LensService implements IService<ILens> {
  private _lens: IModel<ILens>;
  constructor(model: IModel<ILens>) {
    this._lens = model;
  }

  public async create(obj: ILens): Promise<ILens> {
    const parsed = lensZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._lens.create(obj);
  }

  public async readOne(_id: string): Promise<ILens> {
    const lens = await this._lens.readOne(_id);
    if (!lens) throw new Error(ErrorTypes.EntityNotFound);
    return lens;
  }

  public async read(): Promise<ILens[]> {
    const lens = await this._lens.read();
    return lens;
  }

  public async update(_id: string, obj: ILens): Promise<ILens> {
    const parsed = lensZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const updatedLens = await this._lens.update(_id, obj);
    if (!updatedLens) throw new Error(ErrorTypes.EntityNotFound);
    return updatedLens;
  }

  public async remove(_id: string): Promise<ILens> {
    const removedLens = await this._lens.remove(_id);
    if (!removedLens) throw new Error(ErrorTypes.EntityNotFound);
    return removedLens;
  }
}

export default LensService;