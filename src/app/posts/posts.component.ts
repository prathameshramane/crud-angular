import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  name: string = '';

  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.crud.getAllPosts()
      .subscribe(response => {
        this.posts = (response as any[]);
      })
  }

  addNewPost(data: any) {
    this.crud.addNewPost(data)
      .subscribe(response => {
        this.posts.push(response);
      })
  }

  deletePost(post: any) {
    this.crud.deletePost(post.id)
      .subscribe(response => {
        const index = this.posts.indexOf(post)
        this.posts.splice(index, 1)
      })
  }

  updatePost(oldPost: any, newPost: any) {
    this.crud.updatePost(oldPost.id, newPost)
      .subscribe(response => {
        const index = this.posts.indexOf(oldPost);
        this.posts[index] = response;
      })
  }

}
