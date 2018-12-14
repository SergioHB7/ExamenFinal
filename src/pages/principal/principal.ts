import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { CarritoPage } from '../carrito/carrito';



/**

 * Generated class for the PrincipalPage page.

 *

 * See https://ionicframework.com/docs/components/#navigation for more info on

 * Ionic pages and navigation.

 */



@IonicPage()

@Component({

  selector: 'page-principal',

  templateUrl: 'principal.html',





})

export class PrincipalPage {



  producto = ProductoPage;

  car=CarritoPage;
  



  usuario;



  prods = [



    { nombre: 'Jersey PSG visita Air Jordan 2018-2019',

    imagen: "../assets/imgs/PSG.jpg",

    precio: "$1,499",

    vend:'Leonardo Villa',

    fecha: 'Julio 2018',

    disp: '1500',

    val:[1,2,3,4],

    resena: 'Muy buen diseño por parte de los gringos de la NBA',

    avatar:'',

    fer:"",

    usur:""},



    { nombre: 'Jersey Chivas mundial de clubes',

    imagen: '../assets/imgs/Chivas.jpg',

    precio: "$1,399",

    vend:'Diego Morán',

    fecha: 'Noviembre 2018',

    disp: '1200',

    val: [1,2,3,4],

    resena: 'Dale Dale! Muy Chulo alv',

    avatar:'',

    fer:"",

    usur:""},



    { nombre: 'Jersey Juventus local 2018-2019',

    imagen: '../assets/imgs/Juventus.jpg',

    precio: "$1,499",

    vend:'Leonardo Villa',

    fecha: 'Julio 2018',

    disp: '5000',

    val:[1,2,3],

    resena: 'Impresionanti el diseño de Adidas este año',

    avatar:'',

    fer:"",

    usur:""},



    { nombre: 'Jersey local Real Madrid 2018-2019',

    imagen: '../assets/imgs/Madrid.jpg',

    precio: "$1,499",

    vend:'Leonardo Villa',

    fecha: 'Julio 2018',

    disp: '5000',

    val:[1,2,3,4,5],

    resena: 'Impresionanti el diseño de Adidas este año',

    avatar:'',

    fer:"",

    usur:""},



    { nombre: 'Jersey local Barcelona 2018-2019',

    imagen: '../assets/imgs/Barcelona.jpg',

    precio: "$1,499",

    vend:'Leonardo Villa',

    fecha: 'Julio 2018',

    disp: '4000',

    val:[1,2,3],

    resena: 'Muy buen diseño por parte de nike',

    avatar:'',

    fer:"",

    usur:""},



    { nombre: 'Jersey visita Manchester City 2018-2019',

    imagen: '../assets/imgs/City.jpg',

    precio: "$1,499",

    vend:'Leonardo Villa',

    fecha: 'Julio 2018',

    disp: '3500',

    val:[1,2,3,4],

    resena: 'Muy buen diseño por parte de nike',

    avatar:'',

    fer:"",

    usur:""},



    { nombre: 'Jersey local Liverpool 2018-2019',

    imagen: '../assets/imgs/Liverpool.jpg',

    precio: "$1,499",

    vend:'Leonardo Villa',

    fecha: 'Julio 2018',

    disp: '2500',

    val:[1,2,3,4,5],

    resena: 'Impresionanti el diseño de Adidas este año',

    avatar:'',

    fer:"",

    usur:""},



    { nombre: 'Jersey local Bayern Munich 2018-2019',

    imagen: '../assets/imgs/Bayern.jpg',

    precio: "$1,499",

    vend:'Leonardo Villa',

    fecha: 'Julio 2018',

    disp: '4500',

    val:[1,2,3],

    resena: 'Impresionanti el diseño de Adidas este año',

    avatar:'',

    fer:"",

    usur:""},



    { nombre: 'Jersey local Nigeria Rusia 2018',

    imagen: '../assets/imgs/Nigeria.jpg',

    precio: "$1,699",

    vend:'Leonardo Villa',

    fecha: 'Marzo 2018',

    disp: '50',

    val:[1,2,3,4,5],

    resena: 'Muy buen diseño por parte de nike',

    avatar:'',

    fer:"",

    usur:""},



    { nombre: 'Jersey alternativo Chelsea 2018-2019',

    imagen: '../assets/imgs/Chelsea.jpg',

    precio: "$1,399",

    vend:'Diego Morán',

    fecha: 'Diciembre 2018',

    disp: '5000',

    val:[1,2,3,4],

    resena: 'Muy buen diseño por parte de nike',

    avatar:'',

    fer:"",

    usur:""},



    { nombre: 'Jersey alternativo Inter Milan 2018-2019',

      imagen: "../assets/imgs/Inter.jpg",

      precio: "$1,499",

      vend:'Leonardo Villa',

      fecha: 'Julio 2018',

      disp: '2500',

      val:[1,2,3,4],

      resena: 'Muy buen diseño por parte de nike',

      avatar:'',

      fer:"",

      usur:""},



      { nombre: 'Jersey alternativo Atlético de Madrid 2018-2019',

      imagen: "../assets/imgs/Atleti.jpg",

      precio: "$1,499",

      vend:'Leonardo Villa',

      fecha: 'Julio 2018',

      disp: '3000',

      val:[1,2,3,4],

      resena: 'Muy buen diseño por parte de nike',

      avatar:'',

      fer:"",

       usur:""},

 

       { nombre: 'Jersey local West Ham United 2018-2019',

      imagen: "../assets/imgs/West.jpg",

      precio: "$1,499",

      vend:'Leonardo Villa',

      fecha: 'Julio 2018',

      disp: '2500',

      val:[1,2,3],

      resena: 'Impresionanti el diseño de Adidas este año',

      avatar:'',

      fer:"",

      usur:""},



{ nombre: 'Jersey local PSV 2018-2019',
      imagen: "../assets/imgs/PSV.jpg",
      precio: "$1,599",
      vend:'Leonardo Villa',
      fecha: 'Julio 2018',
      disp: '1500',
      val:[1,2,3],
      resena: 'Impresionanti el diseño de Adidas este año',
      avatar:'',
      fer:"",
      usur:""},

{ nombre: 'Jersey local Borussia Dortmund 2018-2019',
      imagen: "../assets/imgs/Borussia.jpg",
      precio:"$1,399",
      vend:'Leonardo Villa',
      fecha: 'Julio 2018',
      disp: '2000',
      val:[1,2,3,4,5],
      resena: 'Impresionanti el diseño de Adidas este año',
      avatar:'',
      fer:"",
      usur:""},



{ nombre: 'Jersey local Atletico Zacatepec 2018-2019',
      imagen: "../assets/imgs/Zacatepec.jpg",
      precio:"$699",
      vend:'Diego Morán',
      fecha: 'Julio 2018',
      disp: '1500',
      val:[1,2,3,4],
      resena: 'Impresionanti el diseño de Adidas este año',
      avatar:'',
      fer:"",
      usur:""},


{ nombre: 'Jersey local Cruz Azul 2018-2019',
      imagen: "../assets/imgs/Cruz.jpg",
      precio:"$1,199",
      vend:'Diego Morán',
      fecha: 'Julio 2018',
      disp: '2500',
      val:[1,2,3,4],
      resena: 'Impresionanti el diseño de Adidas este año',
      avatar:'',
      fer:"",
      usur:""},

{ nombre: 'Jersey local America 2018-2019',
      imagen: "../assets/imgs/America.jpg",
      precio:"$1,499",
      vend:'Diego Morán',
      fecha: 'Julio 2018',
      disp: '2400',
      val:[1,2,3,4],
      resena: 'Muy buen diseño por parte de nike',
      avatar:'',
      fer:"",
      usur:""},
{ nombre: 'Jersey local River Plate 2018-2019',
      imagen: "../assets/imgs/River.jpg",
      precio:"$1,599",
      vend:'Andrés Salas',
      fecha: 'Septiembre 2018',
      disp: '150',
      val:[1,2,3,4],
      resena: 'Impresionanti el diseño de Adidas este año',
      avatar:'',
      fer:"",
      usur:""},

 { nombre: 'Jersey local Boca Juniors 2018-2019',
      imagen: "../assets/imgs/Boca.jpg",
      precio:"$1,499",
      vend:'Andrés Salas',
      fecha: 'Septiembre 2018',
      disp: '200',
      val:[1,2,3,4,5],
      resena: 'Muy buen diseño por parte de nike',
      avatar:'',
      fer:"",
      usur:""},
]
carrito=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
        //this.carrito=this.navParams.get('carr');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }
  productoClick(p){
        this.navCtrl.push(this.producto, {producto:p, carrito:this.carrito});
  }
  carritoClick(){
        this.navCtrl.push(this.car, {cart:this.carrito});
  }
}