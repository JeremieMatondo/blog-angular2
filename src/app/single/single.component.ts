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
article!:Article | undefined
articleId = -1;
service:ArticleService = inject(ArticleService)
ngOnInit() : void{
  this.articleId = Number(this.route.snapshot.paramMap.get('id'));
  this.service.one(this.articleId).then((response: Article) => {this.article = response});
}
}
