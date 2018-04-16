import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter
  } from '@angular/core';
import { ArticleData } from './article.model';

@Component({
  selector: 'app-articleC',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  //inputs:['article']
})

export class ArticleComponent implements OnInit{
 @HostBinding('attr.class') cssCalss = 'row' ;
 @Input() article: ArticleData;
// @Output() onSelectLink = new EventEmitter <ArticleData>();
 //currentLink: ArticleData;
//articles: ArticleData [] ;

whatsGonnaBe(vid:ArticleData){
  console.log(JSON.stringify(vid));



}


//}
/*@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
*/
//The attr() method sets or returns attributes and values of the selected elements.
/*export class Article implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() articles: ArticleData;

  */
/*constructor() {
   this.article = new ArticleData (
    'Angular 2',
    'http://angular.io',
    10);
  }
  /*votes: number;
  title: string;
  link: string;

  constructor () {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';

    this.votes = 10;
    console.log(this.votes);
  }*/
  voteUp( ): boolean {
    this.article.votes +=1;
    console.log(this.article.votes);
    return false;
  }

  voteDown(): boolean {
    this.article.votes -=1;
    console.log(this.article.votes);
    return false;
  }

 ngOnInit() {
    //this.currentLink = this.article[1];  }

  //onSelect(article:ArticleData){
   // this.onSelectLink.emit(article);
   // this.currentLink = article;
}
}
