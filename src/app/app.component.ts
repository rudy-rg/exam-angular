import { Component, OnInit } from '@angular/core';
import { QuotesService } from './services/quotes.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examen Angular - Mensajes aleatorios';
  quote: string;
  author: string;

  hideQuote: boolean;
  hideFirstButtom: boolean;
  urlImage: string;
  hideImage: boolean;
  hideAll: boolean;

  txtHide: string;
  txtShow: string;

  valueSecondButton: string;
  valueThirdButton: string;
  valueFourthButton: string;
  valueFifthButton: string;


  constructor(private serviceQuotes: QuotesService) {
    this.hideQuote = false;
    this.hideFirstButtom = false;
    this.urlImage = '/assets/imagenes/image.png';
    this.hideImage = false;
    this.hideAll = false;
    this.txtHide = 'OCULTAR';
    this.txtShow = 'MOSTRAR';
  }

  ngOnInit() {
    this.loadQuote();
  }

  loadQuote() {
    this.loadValueSecondButton();
    this.loadValueThirdButton();
    this.loadValueFourthButton();
    this.loadValueFifthButton();
    return this.serviceQuotes.getQuote().subscribe(
      data => {
        this.quote = data.quote;
        this.author = data.author;
        return data;
      }
    );
  }

  onClickHideQuote() {
    this.hideQuote = !this.hideQuote;
    this.loadValueSecondButton();
  }

  onClickHideShowFirstButtom() {
    this.hideFirstButtom = !this.hideFirstButtom;
    this.loadValueThirdButton();
  }

  onClickHideShowImage() {
    this.hideImage = !this.hideImage;
    this.loadValueFourthButton();
  }

  onClickHideShowAll() {
    this.hideAll = !this.hideAll;
    this.loadValueFifthButton();
  }

  loadValueSecondButton() {
    this.valueSecondButton = 'Soy el segundo boton: ' + (this.hideQuote ? this.txtShow : this.txtHide ) + ' mensaje';
  }

  loadValueThirdButton() {
    this.valueThirdButton = 'Soy el tercer boton: ' + (this.hideFirstButtom ? this.txtShow : this.txtHide ) + ' el boton de ver mensajes';
  }
  loadValueFourthButton() {
    this.valueFourthButton = 'Soy el cuarto boton: ' + ( this.hideImage ? this.txtShow : this.txtHide ) + ' la imagen';
  }

  loadValueFifthButton() {
    this.valueFifthButton = 'Soy el quinto boton: ' + ( this.hideAll ? this.txtShow : this.txtHide ) + ' todo';
  }
}



