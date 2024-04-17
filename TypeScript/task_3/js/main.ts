import { RowID, RowElement } from "./interface";
/// <reference path="./crud.d.ts"/>
import * as CRUD from "./crud"

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}

const newRowId: RowID = CRUD.insertRow(row);
const updateRow: RowElement = {...row, age:23};
CRUD.updateRow(newRowId, updateRow);
CRUD.deleteRow(newRowId);