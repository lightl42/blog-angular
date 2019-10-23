import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;
  @Input() indexOfPost: number; // index du post dans la liste
  @Input() id: number; // ID du post

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  onLoveIt() {
    this.postService.ajouterLoveIt(this.indexOfPost);
  }

  onDontLoveIt() {
    this.postService.enleverLoveIt(this.indexOfPost);
  }

  onDelete() {
    this.postService.deletePost(this.indexOfPost);
  }
}
