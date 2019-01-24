import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatosServiceProvider } from '../../providers/datos-service/datos-service';
import { SalaPage } from '../sala/sala';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  usuarios:any={
    id:'0',
    user:'defecto',
    isTyping:false
  };
  valorIntroducido:string;

  constructor(public navCtrl: NavController, public datosServiceProvider:DatosServiceProvider) {

  }

  ngOnInit() {
    this.llenarUsuarios();
  }

  llenarUsuarios(){
    this.datosServiceProvider.getUser().subscribe((data) => { // Se han obtenido datos
                        this.usuarios = data;
                      },
                      (error) =>{
                        console.error(error);
                      }
              )

  }

  comprobarUsuario(){
    for(let i of this.usuarios){
      if(i.user == this.valorIntroducido){
        this.navCtrl.setRoot(SalaPage, {
          "user":i.user,
          "id":i.id
        });
      }
    }
  }

}
