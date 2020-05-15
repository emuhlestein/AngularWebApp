export interface ISearchParams {
  minMag: number;
  maxMag: number;
  startDate: string;
  endDate: string;
}

export class SearchParams implements ISearchParams {
  constructor(
    public minMag: number,
    public maxMag: number,
    public startDate: string,
    public endDate: string
  ) { }
}
