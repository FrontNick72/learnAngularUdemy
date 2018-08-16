import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startGame = new EventEmitter<number>();
  @Output() stopGame = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.startGame.emit();
  }

  onStopGame() {
    this.stopGame.emit();
  }
}
