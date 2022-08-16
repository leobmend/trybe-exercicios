import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import ILens, { RequestLens } from '../interfaces/ILens';

export default class FrameController {
  constructor(private _service: IService<ILens>) { }

  public async create(
    req: RequestLens, 
    res: Response<ILens>,
  ) {
    const { degree, blueLightFilter, antiGlare } = req.body;
    const lens = { degree, blueLightFilter, antiGlare };
    const results = await this._service.create(lens);
    return res.status(201).json(results);
  }

  public async readOne(
    req: Request,
    res: Response<ILens>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async read(
    req: Request,
    res: Response<ILens[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async update(
    req: RequestLens,
    res: Response<ILens>,
  ) {
    const { degree, blueLightFilter, antiGlare } = req.body;
    const lens = { degree, blueLightFilter, antiGlare };
    const result = await this._service.update(req.params.id, lens);
    return res.status(200).json(result);
  }

  public async remove(
    req: Request,
    res: Response<ILens>,
  ) {
    const result = await this._service.remove(req.params.id);
    return res.status(200).json(result);
  }
}