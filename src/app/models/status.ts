import { Comics } from "./comics";

export class Status{
    id: Number;
    name: String;
    comics?: Comics;

    constructor(id: Number, name: String, comics: Comics){
        this.id = id;
        this.name = name;
        this.comics = comics;
    }
}