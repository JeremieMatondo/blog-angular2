
import { Category } from "./category";


export interface Article {
    id:number;
    title:string;
    content:string;
    slug:string;
    auteur:string;
    photo:string;
    created_at:string;
    comments:number;
    categories: Category[];

}
