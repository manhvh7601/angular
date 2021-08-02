import { Category } from "./category";
import { Authors } from "./Authors";
import { Status } from "./status";

export class Comics {
    id: Number;
    name: string;
    image: string;
    views: Number;
    category?: Category;
    author?: Authors;
    status?: Status;

    constructor(id: Number, name: string, image: string, status: Status, views: Number, category: Category, author: Authors){
        this.id = id;
        this.name = name;
        this.image = image;
        this.views = views;
        this.category = category;
        this.author = author;
        this.status = status;

    }
}