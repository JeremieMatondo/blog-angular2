import { Category } from "./category";

export interface Articles {
     id:number;
        title:string;
        content:string;
        slug:string;
        auteur:string;
        photo:string;
        created_at:string;
        comments:Comment[];
        categories: Category[];
}
