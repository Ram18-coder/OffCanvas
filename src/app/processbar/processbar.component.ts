import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processbar',
  templateUrl: './processbar.component.html',
  styleUrls: ['./processbar.component.scss']
})
export class ProcessbarComponent implements OnInit{

  showCanvas:boolean=false;
  process:number=0;
  migration:any;
  data:string="migration in progress...";

constructor(){}
ngOnInit(): void {

}

startMigration()
{
  if (this.migration) {
    clearInterval(this.migration);
    this.process = 0;
  }
  this.showCanvas=true;
  this.migration=setInterval(()=>
  {
    this.process+=1;
    if(this.process>=100)
    {
      clearInterval(this.migration);
      setTimeout(()=>
      {
        this.showCanvas=false;
        alert("Migration process is completed");
      },500)
    }
  },50)



}

toggle()
{
  this.showCanvas=!this.showCanvas;
}

}
