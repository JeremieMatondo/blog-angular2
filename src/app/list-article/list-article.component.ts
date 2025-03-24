import { Component, OnInit, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../models/article';
import { NgFor } from '@angular/common';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-list-article',
  imports: [ArticleComponent, NgFor],
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  articles!: Article[] | any; // Déclaration de la variable des articles
   service: ArticleService = inject(ArticleService); // Injection du service via 'inject'

  ngOnInit() {
    // Appel au service pour récupérer les articles
    this.service.all().then(async (articles: Article[]) => {
      this.articles = await articles; 
      console.log(this.articles);
      // Assignation des articles récupérés au tableau
    }).catch(error => {
      console.error('Erreur lors de la récupération des articles : ', error);
    });
  }
}
