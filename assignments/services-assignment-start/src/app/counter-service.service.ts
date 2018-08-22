export class CounterService {
  getCounterElements(countActive: number, countAll: number, countInActive: number) {
    console.log(`Active - ${countActive}; All - ${countAll}; Inactive - ${countInActive}`);
  }
}
