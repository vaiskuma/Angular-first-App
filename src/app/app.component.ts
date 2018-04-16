import { Component } from '@angular/core';
import { ArticleData} from './article/article.model';
import { ArticleComponent} from './article/article.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  //nothing: Array<ArticleData>;
  nothing: ArticleData[];
  titleInput:string = "example";

  addArticle(title: HTMLInputElement, link:HTMLInputElement):boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.nothing.push(new ArticleData(title.value,link.value,0));
    //clears the input values
    title.value= '';
    link.value = " ";

    return false;

  }


  constructor() {
    this.nothing = [
     new ArticleData('Angular 2', 'http://angular.io/docs',3),
      new ArticleData ('Fullstack', 'http://fullstack.io',6),
      new ArticleData ('Angular Homepage', 'http.angula.io/hello',1),
      new ArticleData ('Stack Overflow', 'https.stackoverflow.com/questions/4444477/how-to-tell-if-a-string-contains-a-certain-character-in-javascript#4444497',10)
    ]
  }

  compareNumbers(a, b) {
    return a - b;
  }

  sortedArticles(): ArticleData[] {
    return this.nothing.sort(((a:ArticleData, b:ArticleData)=>b.votes - a.votes));
  }


}
