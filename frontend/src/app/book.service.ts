import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  displayBooks(){

    return this.http.get<any>('http://localhost:5001/books')
  }

  createbook(data:any){
    return this.http.post<any>('http://localhost:5001/books',{data})
  }

  displayBooksById(id:any){

    return this.http.get<any>(`http://localhost:5001/books/${id}`)

  }

  updateBook(id:any,data:any){
    return this.http.put<any>(`http://localhost:5001/books/${id}`,data)
  }

  deleteBook(id:any){
    return this.http.delete(`http://localhost:5001/books/${id}`)
  }
}
