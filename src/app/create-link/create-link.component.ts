import { Component, HostBinding, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { ArticleData} from '../article/article.model';
import {ReactiveFormsModule} from '@angular/forms';
import { ArticleComponent} from '../article/article.component';
import { Observable} from 'rxjs/Observable';
import { AngularFireDatabase} from 'angularfire2/database';
import { Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { FormGroup, FormControl, FormBuilder, Validators, NgModel } from '@angular/forms';
import { FirebaseUserModel } from '../core/user.model';
import { createOutput } from '@angular/compiler/src/core';
import { validateTag } from './validateTag.validator';






@Component({
  selector: 'create-link-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'create-link.component.html',
  styleUrls: ['create-link.component.scss'],
})
export class CreateLinkComponent {
  @Input ()articleData : ArticleData;
  public linksForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes

title: string = '';
tag: string = '';
link: string = '';
  nothing: ArticleData[];
  userId: string;
  items: Observable<any[]>;
  //user: Observable <FirebaseUserModel>;

  constructor(public db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public af: AngularFireDatabase,
    private fb: FormBuilder) {
    }
    
  ngOnInit(): void {
    this.nothing = [
    new ArticleData('Angular 2', 'http://angular.io/docs','#Angular5',3),]
    this.createForm();
    this.afAuth.authState.subscribe(user => {
    if (user) this.userId = user.uid})
    }
  

 

     createForm() {
    this.linksForm = this.fb.group({
      title: ['', Validators.required],
      tag: ['', Validators.required, validateTag], 
      link: ['', Validators.required], 
    });
  }

  onSubmitAddArticle(linksForm):boolean {

    
    
      this.title = linksForm.title;
      this.tag = linksForm.tag;
      this.link = linksForm.link;
    console.log('Adding article title:' + this.title + " tag value" + this.tag + "with a link" + this.link);
    this.nothing.push(new ArticleData(this.title,this.link, this.tag,0));
    
    this.db.list('/links').push(this.nothing);
  
  
    linksForm.title = null ;
    linksForm.link = null;
    linksForm.tag =  null ;
   
    return false;

  }

  compareNumbers(a, b) {
    return a - b;
  }

  sortedArticles(): ArticleData[] {
    return this.nothing.sort(((a:ArticleData, b:ArticleData)=>b.votes - a.votes));
  }


}
