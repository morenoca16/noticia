import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  listCategorys : any []=[];
  listNoticias : any []=[];
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private router: Router , public http: HttpClient ) {}

  ngOnInit() {
  
    this.http.get('../../assets/noticias_all.JSON').subscribe(data =>{
      this.listCategorys=JSON.parse(JSON.stringify(data))[0].noticias.categorys;
      this.listNoticias=JSON.parse(JSON.stringify(data))[0].detailNoticias;
    })
  }

  Navigate (value: any){

    console.log(value);
  let id= JSON.stringify(value)
    this.router.navigate(['noti1', {id}])
    localStorage.setItem('notiDetail', JSON.stringify(value))
  }

  goToFormacion(){
    this.router.navigate(['/formacion'])
  }
  goToCoordinacion(){
    this.router.navigate(['/coordinacion'])
  }
  goToNovedades(){
    this.router.navigate(['/novedades'])
  }
  goToNoti1(){
    this.router.navigate(['/noti1'])
  }
  
}
