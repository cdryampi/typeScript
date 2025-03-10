export class OriginPlanet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  constructor(
    _id: number,
    _name: string,
    _isDestroyed: boolean,
    _description: string,
    _image: string
  ) {
    this.id = _id;
    this.name = _name;
    this.isDestroyed = _isDestroyed;
    this.description = _description;
    this.image = _image;
  }
}
