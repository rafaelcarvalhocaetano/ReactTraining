
export interface DranAndDropList {
  listDranAndDrop: DranAndDrop [];
}

export interface DranAndDrop {
  id: string;
  description: string;
  auth: string;
  title?: string;
}