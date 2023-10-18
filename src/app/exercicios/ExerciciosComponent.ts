import { Component, } from '@angular/core';


@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {
  frase: string = 'olá mundo';
  link = "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zDAtii_JqcgyYPTiSc5IzMwrTixXyE3MAwCJRQmg&q=chainsaw+man&rlz=1C1PRFI_enBR1036BR1036&oq=chaisa&gs_lcrp=EgZjaHJvbWUqDwgBEC4YChiDARixAxiABDIGCAAQRRg5Mg8IARAuGAoYgwEYsQMYgAQyBggCEAAYAzIJCAMQABgKGIAEMgkIBBAAGAoYgAQyDwgFEAAYChiDARixAxiKBTIMCAYQABgKGLEDGIAEMg8IBxAuGAoYgwEYsQMYgAQyDAgIEAAYChixAxiABNIBCTI1MTY5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8";
  cor = 'green'
  mudaCor = ()=>{
  if(this.cor == 'green'){
    this.cor = 'blue'
  }else{
    this.cor = 'green'
  }
}
  
texto = '';
setTexto(value:string): void {
  this.texto = value;
}
}
  
  

