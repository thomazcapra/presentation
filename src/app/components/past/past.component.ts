import { CardInfoModel } from './../../model/card-info.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss']
})
export class PastComponent implements OnInit {

  pastData = <Array<CardInfoModel>>
    [
      new CardInfoModel(
        'Technical in Accounting',
        'http://www.atua.ag/imgs/clientes/politecnico.png',
        'Colégio Politécnico de Sorocaba',
        'I have worked with accounting'
      ),
      new CardInfoModel(
        'Bachelor degree - Computer Science',
        'http://www.empts.com.br/system/news/images/000/000/006/internal/ufscar.jpg?1381417219',
        'Federal University of São Carlos',
        'I was data structure course monitor'
      ),
      new CardInfoModel(
        'System Analyst',
        'https://setis.com.br/homepage/img/logo_setis.gif',
        'SETIS Automação e Sistemas Ltda',
        'I was responsible for some applications'
      ),
    ];

  constructor() { }

  ngOnInit() {
  }

}
