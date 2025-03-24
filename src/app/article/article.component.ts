import { Component, inject, Input,} from '@angular/core';
import { Article } from '../models/article';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [NgFor,RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
@Input() article!:Article ;
service:ArticleService = inject(ArticleService)
 excerptText(content: string, limit: number): string {
    return content.length <= limit ? content : content.substring(limit) + '...'
  }

}
