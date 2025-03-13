export interface ResponseData {
  version: string;
  reqId: string;
  status: string;
  sig: string;
  table: Table;
}

export interface Table {
  cols: Col[];
  rows: Row[];
  parsedNumHeaders: number;
}

export interface Col {
  id: string;
  label: string;
  type: string;
}

export interface Row {
  c: Cell[];
}

export interface Cell {
  v: null | string;
}
