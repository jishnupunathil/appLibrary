import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
bookArray:any=[]
  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(){
    this.bookService.displayBooks().subscribe((res)=>{
      console.log({res});
      this.bookArray=res.item
      
    })

  }
navigateToEdit(id:any){
this.router.navigate([`/edit/${id}`])
}

navigateToDelete(id:any){
  if(confirm('are you sure want to delete?')){
    this.bookService.deleteBook(id).subscribe((res:any)=>{
      if(res.success===1){
  
        this.ngOnInit()
  
      }
    })

  }

  

}
}
