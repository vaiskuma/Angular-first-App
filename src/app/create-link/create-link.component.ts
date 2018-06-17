import { Component, HostBinding, ChangeDetectionStrategy, Input } from '@angular/core';
import { ArticleData} from '../article/article.model';
import {ReactiveFormsModule} from '@angular/forms';
import { ArticleComponent} from '../article/article.component';
import { Observable} from 'rxjs/Observable';
import { AngularFireDatabase} from 'angularfire2/database';
import { Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FirebaseUserModel } from '../core/user.model';
import { createOutput } from '@angular/compiler/src/core';




@Component({
  selector: 'create-link-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'create-link.component.html',
  styleUrls: ['create-link.component.scss'],
})
export class CreateLinkComponent {
  @Input ()articleData : ArticleData;
  public myForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes

  nothing: ArticleData[];
  titleInput:string = "example";
  userId: string;
  items: Observable<any[]>;
  //user: Observable <FirebaseUserModel>;
  

 

  addArticle(title: HTMLInputElement, link:HTMLInputElement):boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);

    this.nothing.push(new ArticleData(title.value,link.value,0));
    
    
   this.db.list('/links').push(this.nothing);
  
    //clears the input values
  
    title.value= " " ;
    link.value = " ";

    return false;

  }

  

//simplify form initialization
  constructor(public db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public af: AngularFireDatabase,
    private _fb: FormBuilder) {
    this.nothing = [
     new ArticleData('Angular 2', 'http://angular.io/docs',3),
  ]
    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid})
   // this.items = db.list('links').valueChanges();
    //console.log(this.items)
   // this.items = db.list('links').snapshotChanges();
    //console.log(this.items)

  
}

save(model: ArticleData, isValid: boolean) {
  this.submitted = true; // set form submit to true

  // check if model is valid
  // if valid, call API to save customer
  console.log(model, isValid);
}



  compareNumbers(a, b) {
    return a - b;
  }

  sortedArticles(): ArticleData[] {
    return this.nothing.sort(((a:ArticleData, b:ArticleData)=>b.votes - a.votes));
  }


}
