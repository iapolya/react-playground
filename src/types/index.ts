import { ChangeEventHandler } from "react";

export interface ICat {
  id: number,
  name: string,
  email: string
}

export interface ISearch {
  searchField: string,
  onSearchChange: ChangeEventHandler<HTMLInputElement>
}
