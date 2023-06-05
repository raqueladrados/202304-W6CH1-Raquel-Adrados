export const actionTypes = {
  load: "telephones@load",
  delete: "telephones@delete",
  create: "telephones@create",
  update: "telephones@update",
  selecttelephone: "telephones@selecttelephone",
  unSelecttelephone: "telephones@unSelecttelephone",
} as const;

export enum actionTypesE {
  load = "telephones@load",
  delete = "telephones@delete",
  create = "telephones@create",
  update = "telephones@update",
}

export enum actionTypesEnumNumeric {
  load,
  delete,
  create,
  update,
}
