import { DranAndDropList } from './dndElement';
import { Item, List, ItemCard } from './List';

export interface IList {
  list_cards: DranAndDropList [];
  list_title: string[];
  list_items: Item [];
  list_options: List [];
  list_icons: ItemCard[]
}