import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/suth.service';

@Component({
  selector: 'app-rotegida',
  templateUrl: './rotegida.component.html',
  styles: []
})
export class RotegidaComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
    console.log('ngOnInit protegida');
    this.auth.userProfile$.subscribe( perfil => {
      console.log(perfil);
    });
  }

}
