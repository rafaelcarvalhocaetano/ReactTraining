export interface Item {
  name?: string;
  icon: string;
  description: string;
}

export interface List {
  id: number;
  description: string;
}

export interface ItemCard extends Item {
  color: string;
}

export interface Profile {
  name: string;
  phone: string;
}