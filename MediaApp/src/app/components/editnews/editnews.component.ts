import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-editnews',
  templateUrl: './editnews.component.html',
  styleUrls: ['./editnews.component.css']
})
export class EditnewsComponent implements OnInit {

  constructor(private newsService: NewsService,private router: Router,private route: ActivatedRoute,private formBuilder: FormBuilder) { }
  // title: string = ''
  // description: string = ''
  // url: string = ''
  // urlToImage: string = ''
  // publishedAt: string = ''

  newsForm!: FormGroup;

  ngOnInit(): void {
    this.newsForm = new FormGroup({
      _id: new FormControl(),
      title:new FormControl(),
      description: new FormControl(),
      url: new FormControl(),
      urlToImage: new FormControl(),
      publishedAt: new FormControl(),
    });

    const id = this.route.snapshot.params.id
    console.log(id)

    this.newsService.getSingleNews(id).subscribe((data) => {
      this.newsForm.setValue(data)
      console.log(data)
    })
  }

  updateNews(){
    
    let newNews = this.newsForm.value; // no changes here for updating 
    console.log(newNews);
    this.newsService.updateNews(newNews).subscribe((response) => {
        console.log(response);
        this.router.navigate(['newsList']);
    })
  
  }


}
