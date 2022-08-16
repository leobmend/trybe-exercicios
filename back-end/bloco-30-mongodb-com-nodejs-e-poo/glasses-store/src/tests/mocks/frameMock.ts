import IFrame from '../../interfaces/IFrame';

const frameMock: IFrame = {
  material: 'Ouro',
  color: 'Daquele naipe'
};

const frameMockWithId:IFrame & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Ouro',
  color: 'Daquele naipe'
};

const frameMockWithIdArray: (IFrame & { _id: string })[] = [
  frameMockWithId,
  { ...frameMockWithId, _id: '99cf1fc6498565d94eba52cd' }
];

export { frameMock, frameMockWithId, frameMockWithIdArray };