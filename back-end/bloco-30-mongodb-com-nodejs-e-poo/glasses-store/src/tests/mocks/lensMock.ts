import ILens from '../../interfaces/ILens';

const lensMock: ILens = {
  degree: 5,
  antiGlare: true,
  blueLightFilter: false,
};

const lensMockWithId: ILens & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  degree: 5,
  antiGlare: true,
  blueLightFilter: false,
};

const lensMockWithIdArray: (ILens & { _id: string })[] = [
  lensMockWithId,
  { ...lensMockWithId, _id: '99cf1fc6498565d94eba52cd' }
];

export { lensMock, lensMockWithId, lensMockWithIdArray };