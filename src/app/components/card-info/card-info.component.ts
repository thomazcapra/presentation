import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {
  @Input() title: string;
  @Input() where: string;
  @Input() description: string;
  @Input() icon: string;

  constructor() {}

  ngOnInit() {}
}
