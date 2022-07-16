import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http:HttpClient) { }

  displayBooks(){

    return this.http.get<any>('books')
  }

  createbook(data:any){
    return this.http.post<any>('books',{data})
  }

  displayBooksById(id:any){

    return this.http.get<any>(`books/${id}`)

  }

  updateBook(id:any,data:any){
    return this.http.put<any>(`books/${id}`,data)
  }

  deleteBook(id:any){
    return this.http.delete(`books/${id}`)
  }
}
