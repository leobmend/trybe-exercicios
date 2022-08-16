import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import IFrame, { RequestFrame } from '../interfaces/IFrame';

export default class FrameController {
  constructor(private _service: IService<IFrame>) { }

  public async create(
    // Unimos o tipo do _request_ com um objeto que tem chave `body` com o valor de um IFrame
    // assim conseguimos extrair as propriedades da armação para passá-las para o _service_
    req: RequestFrame, 
    // Usamos o IFrame como parâmetro genérico do Request
    // para declarar que vamos responder a requisição com um objeto do tipo IFrame
    res: Response<IFrame>,
  ) {
    const { material, color } = req.body;
    const frame = { material, color };
    const results = await this._service.create(frame);
    return res.status(201).json(results);
  }

  public async readOne(
    req: Request,
    res: Response<IFrame>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async read(
    req: Request,
    res: Response<IFrame[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async update(
    req: RequestFrame,
    res: Response<IFrame>,
  ) {
    const { material, color } = req.body;
    const frame = { material, color };
    const result = await this._service.update(req.params.id, frame);
    return res.status(200).json(result);
  }

  public async remove(
    req: Request,
    res: Response<IFrame>,
  ) {
    const result = await this._service.remove(req.params.id);
    return res.status(200).json(result);
  }
}