import { TODOLIST,TODOLIST2 } from "./adatok.js";

export function TáblázatLétrehozás(params) {
    const SzuloElem = document.getElementsByClassName("ujadat")
    const TABLAZAT = document.createElement("table")
    SzuloElem.append(TABLAZAT);

    /*sorok készítése*/
    for (let index = 0; index < TODOLIST2.length; index++) {
        let sor = document.createElement("tr")
        

        
    }
    }

