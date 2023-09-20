import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-noti1',
  templateUrl: './noti1.page.html',
  styleUrls: ['./noti1.page.scss'],
})
export class Noti1Page implements OnInit {
  data: any;
  sub: any;
  notiDetail: any;
  detailNewsList: any []=[];
  titleNews : String='';
  imagenDetailNews : string='';
  subTitleNews : String = '';
  dateDetailNews: string='';
  contentDetailNews: string= '';
  fuenteUrlNews: string='';
  textLong: string='';

  constructor(
    public route: Router,
    private router: ActivatedRoute
    ) {}

  ngOnInit() {

    this.notiDetail = localStorage.getItem('notiDetail');
    this.detailNewsList= Object.values(JSON.parse(this.notiDetail));
    console.log(this.detailNewsList);

    this.titleNews = this.detailNewsList[0];
    this.imagenDetailNews = this.detailNewsList[3];
    this.subTitleNews = this.detailNewsList[2];
    this. dateDetailNews= this.detailNewsList[1];
    this.contentDetailNews = this.detailNewsList[4];
    this.fuenteUrlNews = this.detailNewsList[5];
    this.imagenDetailNews = this.detailNewsList[6];
    this.textLong = this.detailNewsList[7];

    this.sub= this.router.params.subscribe(params => {
      this.data =params ['id'];
      console.log(this.data);
    })
  }
  back(){
    this.route.navigate(['./folder/inbox'])
  }
  
}
