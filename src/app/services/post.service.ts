import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

  postSubject = new Subject<any []>();

   /* private posts = [
    {
      id: 0,
      title: 'Mon premier post',
      content: 'Ceci est mon premier post [...]',
      loveIts: 3,
      created_at: new Date()
    },
    {
      id: 1,
      title: 'Mon deuxieme post',
      content: 'Ceci est mon deuxieme post [...]',
      loveIts: -4,
      created_at: new Date()
    },
    {
      id: 2,
      title: 'Mon troisieme post',
      content: 'Ceci est mon troisieme post [...]',
      loveIts: 0,
      created_at: new Date()
    }
  ]; */

  private posts = [];

  constructor(private httpClient: HttpClient) {}

  // Emission du subject
  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }

  // Incremente les loveIts
  ajouterLoveIt(index: number) {
    this.posts[index].loveIts++;
    this.emitPostSubject();
  }

  // Decremente les loveIts
  enleverLoveIt(index: number) {
    this.posts[index].loveIts--;
    this.emitPostSubject();
  }

  // Ajout d'un post
  addPost(title: string, content: string) {
    const postObject = {
      id: 0,
      title: '',
      content: '',
      loveIts: 0,
      created_at: new Date()
    };
    postObject.title = title;
    postObject.content = content;
    postObject.id = this.posts[(this.posts.length - 1)].id + 1;
    this.posts.push(postObject);
    this.emitPostSubject();
  }

  // Suppression d'un post
  deletePost(index: number) {
    if(confirm("Etes-vous certain de vouloir supprimer ce post ?")) {
      this.posts.splice(index, 1);
      this.emitPostSubject();
    }
  }

  savePostsToServer() {
    this.httpClient
    .put('https://blog-angular-a4b9e.firebaseio.com//posts.json', this.posts)
    .subscribe(
      () => {
        console.log("Enregistrement terminé !");
      },
      (error) => {
        console.log("Erreur de sauvegarde : " + error);
      }
    );
  }

  getPostsFromServer() {
    this.httpClient
    .get<any[]>('https://blog-angular-a4b9e.firebaseio.com//posts.json')
    .subscribe(
      (response) => {
        this.posts = response;
        this.emitPostSubject();
      },
      (error) => {
        console.log("Erreur de chargement : " + error);
      }
    );
  }
}
