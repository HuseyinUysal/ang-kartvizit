import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModelComponent } from './card-model/card-model.component';
import { config } from 'rxjs';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards!: Card[];

  constructor(
    public dialog: MatDialog,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.getCards
      
  }
  openAddCardModule(): void {
    this.dialog.open(CardModelComponent, {
      width:'400px'
    });

  }

  getCards(): void {
    this.cardService.getCards()
    .subscribe((res: Card[]) =>{
      this.cards = res;

    });
  }

}
