import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
  public folder: string;
  public boy:number=0/100;
  public kilo:number=0;
  public sonuc:number=0;
  public vki:string;
  public src:string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  hesapla(){
    this.sonuc = (this.kilo)/+(((this.boy)/100)*((this.boy)/100));
    this.sonuc = Number(this.sonuc.toFixed(2));
    if(this.sonuc<18.5){
      this.vki="--Vücüt Durumunuz--"+"Zayıf";
      this.src='https://r.resimlink.com/k3ROhi.png';
    }
    else if(this.sonuc<25 && this.sonuc>=18.5){
      this.vki="--Vücüt Durumunuz--"+"Normal";
      this.src='https://r.resimlink.com/ySpz.png';
    }
    else if(this.sonuc<30 && this.sonuc>=25){
      this.vki="--Vücüt Durumunuz--"+"Kilolu";
      this.src='https://r.resimlink.com/kV76S.png';
    }
    else if(this.sonuc<40 && this.sonuc>=30){
      this.vki="--Vücüt Durumunuz--"+"Obez";
      this.src='https://r.resimlink.com/4PnIe.png';
    }
    else if(this.sonuc>=40){
      this.vki="--Vücüt Durumunuz--"+"İleri Derecede Obez";
      this.src='https://r.resimlink.com/wIAH.png';
    }
  }
}
