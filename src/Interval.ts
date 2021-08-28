export class Interval {
  private static nextId: number = 1;

  id: number;
  name: string | undefined;
  seconds: number | undefined;

  constructor(name: string, seconds: number) {
    this.id = Interval.nextId++;
    this.name = name;
    this.seconds = seconds;
  }
}