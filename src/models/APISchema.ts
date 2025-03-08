import Personaje from "./Personaje";
import { Links } from "./Links";
import { Meta } from "./Meta";
import { config } from "../config";

export class APISchema {
  items: Personaje[];
  links: Links;
  meta: Meta;
  limit: number;

  constructor(_items: Personaje[], _links: Links, _meta: Meta) {
    this.items = _items;
    this.links = _links;
    this.meta = _meta;
    this.limit = config.LIMIT;
  }
}
