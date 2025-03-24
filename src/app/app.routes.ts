import { Routes } from '@angular/router';
import { ListArticleComponent } from './list-article/list-article.component';
import { CategorieComponent } from './categorie/categorie.component';
import { SingleComponent } from './single/single.component';

export const routes: Routes = [
    {path:'',component:ListArticleComponent},
    {path:"categories",component:CategorieComponent},
    {path:'articles/:id',component:SingleComponent}
];
