import { Component, inject } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  route:ActivatedRoute=inject(ActivatedRoute)
article!:Article
articleId = -1;
service:ArticleService = inject(ArticleService)
ngOnInit(){
  this.articleId = Number(this.route.snapshot.paramMap.get('id'));
  this.article=this.service.getOne(this.articleId)
}
}
