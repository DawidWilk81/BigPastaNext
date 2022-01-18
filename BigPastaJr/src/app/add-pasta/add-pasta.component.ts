import { Component, OnInit } from '@angular/core';
import { PastasService } from '../pastas.service';

@Component({
  selector: 'app-add-pasta',
  templateUrl: './add-pasta.component.html',
  styleUrls: ['./add-pasta.component.scss'],
  providers:[PastasService]
})
export class AddPastaComponent implements OnInit {
  pasta;
  constructor(private ps:PastasService) { }

  ngOnInit(): void {
    this.pasta = {
      Tytul: '',
      Opis: '',
      Tresc: ''
    }
  }

  addPasta(){
    return this.ps.addPasta(this.pasta).subscribe(
      response =>{
        console.log('wyslano:', response);
    },error=>{console.log("error", error)
    })
  }
}
