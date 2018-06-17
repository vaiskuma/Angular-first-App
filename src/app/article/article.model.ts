import {FormGroup, FormControl} from '@angular/forms';

export class ArticleData {
  

  //articleDataForm = new FormGroup ({
   //title: new FormControl (),
   // link : new FormControl (),

  //});


  title: string;
  link: string;
  votes:number
 


  constructor(title: string, link:string, votes?:number) {
   this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  voteUp( ): void {
    this.votes +=1;
    console.log(this.votes);

  }

  voteDown(): void {
    this.votes -=1;
    console.log(this.votes);

  }
//a function's return type indicates what sort of data it returns

domain(): string {
const domainAndPath :string = this.link;

  try {
    if (domainAndPath.indexOf('//') > -1) {
      let dAP=domainAndPath.split('//')[1];
      console.log(dAP)
      dAP= dAP.split('/')[0]
      return dAP;
    }
    console.log(domainAndPath.split('/')[0])
    let dAPs = domainAndPath.split('/')[0];
    return dAPs;
  } catch (err){
    return null;
  }
}
}
