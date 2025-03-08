export default class Personaje {
  id: number;
  name: string;
  race: string;
  gender: string;
  ki: number;
  maxKi: number;
  affiliation: string;
  description: string;
  image: string;

  constructor(
    _id: number,
    _name: string,
    _race: string,
    _gender: string,
    _base_ki: number,
    _total_ki: number,
    _afilliation: string,
    _description: string,
    _image: string
  ) {
    this.id = _id;
    this.name = _name;
    this.race = _race;
    this.gender = _gender;
    this.ki = _base_ki;
    this.maxKi = _total_ki;
    this.affiliation = _afilliation;
    this.description = _description;
    this.image = _image;
  }

  getDescripcion(): string {
    // devolver los primeros 100 caracteres de la descripción.
    let description = this.description.slice(0, 100);
    description += "...";
    return description;
  }
}
