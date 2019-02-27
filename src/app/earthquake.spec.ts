import { Earthquake } from './earthquake';

describe('Earthquake', () => {
  it('should create an instance', () => {
    expect(new Earthquake(7, "Utah")).toBeTruthy();
  });
});
