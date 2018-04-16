"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var article_model_1 = require("./article.model");
var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
        this.cssCalss = 'row';
        this.articles =
            new article_model_1.ArticleData('Angular 2', 'http://angular.io', 3);
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
    
      constructor() {
       this.articles = new ArticleData (
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
    ArticleComponent.prototype.voteUp = function () {
        this.articles.votes += 1;
        console.log(this.articles.votes);
        return false;
    };
    ArticleComponent.prototype.voteDown = function () {
        this.articles.votes -= 1;
        console.log(this.articles.votes);
        return false;
    };
    ArticleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.HostBinding('attr.class')
    ], ArticleComponent.prototype, "cssCalss");
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'app-article',
            templateUrl: './article.component.html',
            styleUrls: ['./article.component.css']
        })
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
var str = '1';
var str2 = str; //str is now of type number
console.log(str2);
