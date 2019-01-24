import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {RequestOptions, Headers, Http, Request} from '@angular/http';


@Injectable()
export class DatosServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DatosServiceProvider Provider');
  }

  getUser():Observable<any[]>{
    return this.http.get("http://localhost:3000/usuarios") as Observable<any>;
  }

  getMensajes():Observable<any[]>{
    return this.http.get("http://localhost:3000/mensajes") as Observable<any>;
  }


  enviarMensaje(datos:any){

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = {
            "id": datos.id,
            "user": datos.user,
            "content": datos.content
    }

    console.log(datos);

    this.http.post("http://localhost:3000/mensajes", postData)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });

  }
}
