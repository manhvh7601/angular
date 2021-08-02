export class Authors {
    id: Number;
    name: String;
    comics?: Array<any>

    constructor(id: Number, name: String, comics: Array<any>){
        this.id = id;
        this.name = name;
        this.comics = comics;
    }
}
