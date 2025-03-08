export class Links {
  // Clase de los links de la api de dragonball
  first: String;
  previous: String;
  next: String;
  last: String;

  constructor(_first: String, _previous: String, _next: String, _last: String) {
    this.first = _first;
    this.previous = _previous;
    this.next = _next;
    this.last = _last;
  }
}
