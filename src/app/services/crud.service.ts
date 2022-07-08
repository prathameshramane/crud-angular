import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(this.url + '/posts')
  }

  addNewPost(data: any) {
    return this.http.post(this.url + '/posts', data)
  }

  deletePost(id: number) {
    return this.http.delete(this.url + '/posts/' + id)
  }

  updatePost(id: number, data: any) {
    return this.http.patch(this.url + '/posts/' + id, data)
  }

}
