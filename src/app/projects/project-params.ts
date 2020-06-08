export interface IProjectParams {
  name: string;
  description: string;
  sprintLength: number;
  numSprints: number;
  startDate: string;
}

export class ProjectParams implements IProjectParams {
  constructor(
    public name: string,
    public description: string,
    public sprintLength: number,
    public numSprints: number,
    public startDate: string
  ) { }
}
