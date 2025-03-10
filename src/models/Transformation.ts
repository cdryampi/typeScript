export default class Transformation {
  id: number;
  name: string;
  image: string;
  ki: string;

  constructor(_id: number, _name: string, _image: string, _ki: string) {
    this.id = _id;
    this.name = _name;
    this.image = _image;
    this.ki = _ki;
  }
}
