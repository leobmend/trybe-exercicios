import IService from '../interfaces/IService';
import IFrame, { FrameZodSchema } from '../interfaces/IFrame';
import IModel from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class FrameService implements IService<IFrame> {
  // quando fazemos IService<IFrame> acima 
  // estamos implementando a interface com o tipo IFrame com o parâmetro genérico
  private _frame: IModel<IFrame>;
  // o mesmo fazemos aqui com a interface do Model
  constructor(model: IModel<IFrame>) {
    this._frame = model;
  }

  public async create(obj: IFrame): Promise<IFrame> {
    const parsed = FrameZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error; // vamos falar sobre como esse erro tratá-lo logo logo
    }
    return this._frame.create(obj);
  }

  public async readOne(_id: string): Promise<IFrame> {
    const frame = await this._frame.readOne(_id);
    if (!frame) throw new Error(ErrorTypes.EntityNotFound);
    return frame;
  }

  public async read(): Promise<IFrame[]> {
    const frames = await this._frame.read();
    return frames;
  }

  public async update(_id: string, obj: IFrame): Promise<IFrame> {
    const parsed = FrameZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const updatedFrame = await this._frame.update(_id, obj);
    if (!updatedFrame) throw new Error(ErrorTypes.EntityNotFound);
    return updatedFrame;
  }

  public async remove(_id: string): Promise<IFrame> {
    const removedFrame = await this._frame.remove(_id);
    if (!removedFrame) throw new Error(ErrorTypes.EntityNotFound);
    return removedFrame;
  }
}

export default FrameService;