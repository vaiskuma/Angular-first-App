"use strict";
exports.__esModule = true;
var ArticleData = /** @class */ (function () {
    function ArticleData(title, link, votes) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    ArticleData.prototype.voteUp = function () {
        this.votes += 1;
        console.log(this.votes);
    };
    ArticleData.prototype.voteDown = function () {
        this.votes -= 1;
        console.log(this.votes);
    };
    //a function's return type indicates what sort of data it returns
    ArticleData.prototype.domain = function () {
        try {
            var domainAndPath = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        }
        catch (err) {
            return null;
        }
    };
    return ArticleData;
}());
exports.ArticleData = ArticleData;
