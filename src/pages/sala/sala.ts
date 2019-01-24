import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosServiceProvider } from '../../providers/datos-service/datos-service';


@IonicPage()
@Component({
  selector: 'page-sala',
  templateUrl: 'sala.html',
})

export class SalaPage implements OnInit {

  id:string='';
  name:string='';

  //Todos los mensajes
  mensajes:any;

  //Mensaje introducido
  escrito:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public datosServiceProvider:DatosServiceProvider ) {
    this.id=navParams.get('id');
    console.log(this.id);
  }


  ngOnInit() {
    this.llenarUsuarios();

  }

  ionViewDidLoad() {

  }

  llenarUsuarios(){
    this.datosServiceProvider.getMensajes().subscribe((data) => { // Se han obtenido datos
                        this.mensajes = data;
                        console.log(data);
                      },
                      (error) =>{
                        console.error(error);
                      }
              )

  }


  enviarMensaje(id:any, user:any, content:any){

    let datos={
      id:id+1,
      user:user,
      content:content
    }

    this.datosServiceProvider.enviarMensaje(datos);

  }



}
