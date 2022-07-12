import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
 book={
  Bcode:'',
  Bname:'',
  Bauthor:'',
  Bgenere:'',
  Bimage:''
 }

 id:any
  constructor(private bookService:BookService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {

    this.id=this.route.snapshot.paramMap.get('id')
    console.log('id is:',this.id);
    if(this.id){
    this.bookService.displayBooksById(this.id).subscribe((res)=>{
      console.log({res});

      this.book=res.item
      
    })
  }
    
  }

  onAddBook(){

    if(this.id){

      this.bookService.updateBook(this.id,this.book).subscribe((res)=>{
        console.log({res});
        if(res.success===1){
          this.router.navigate(['/books'])
        }
      })

    }else{
this.bookService.createbook(this.book).subscribe((res)=>{
  console.log({res});

    this.router.navigate(['/books'])
  
})
  }
}

}
