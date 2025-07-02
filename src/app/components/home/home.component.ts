import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Social Humour';
  players: string[] = ['A','B','C'];

  // Arrays for random card rules and game info
  cardRules: string[] = [
    'The first player to collect 5 matching cards wins the game.',
    'White cards are worth double points at the end of the game.',
    'If you draw a black card, you must tell a joke or forfeit your turn.',
    'Players can trade cards once per round.',
    'The player with the funniest interpretation of a card gets an extra turn.',
    'If you can make everyone laugh with your card, you can draw an additional card.',
    'Cards with the same text but different colors can be paired for bonus points.',
    'The game ends when all cards have been drawn or when a player reaches 30 points.',
    'Each player starts with 7 cards in their hand.',
    'You can only play one card per turn unless you have a special action card.',
    'Players must keep their cards hidden from other players.',
    'The dealer rotates clockwise after each round.',
    'A player who cannot make a valid play must draw a card.',
    'Special action cards can change the direction of play.',
    'Players can challenge the validity of a play, with penalties for incorrect challenges.'
  ];

  gameInfo: string[] = [
    'Social Humour was created in 2023 as a way to bring friends together through laughter.',
    'The game is best played with 3-6 players for maximum enjoyment.',
    'Each game typically lasts about 30-45 minutes.',
    'There are 30 unique cards in the standard deck.',
    'The first 5 cards are special white cards that have unique abilities.',
    'Social Humour has been played in over 20 countries worldwide.',
    'The record for the fastest game completion is 12 minutes.',
    'New card packs are released quarterly with fresh content.',
    'The game was inspired by classic card games and modern meme culture.',
    'Social Humour tournaments are held annually in major cities.',
    'The game can be played in teams for larger groups.',
    'A digital version of the game is currently in development.',
    'The game has won multiple awards for its innovative design.',
    'Social Humour cards are made from sustainable materials.',
    'The game includes a companion app for enhanced gameplay experiences.'
  ];

  // Properties to hold the randomly selected rules and info items
  randomRules: string[] = [];
  randomInfos: string[] = [];

  // Number of items to display
  numberOfItems: number = 5;

  ngOnInit(): void {
    // Select random rules and info when component initializes
    this.getRandomContent();
  }

  // Method to get random content
  getRandomContent(): void {
    // Clear previous selections
    this.randomRules = [];
    this.randomInfos = [];

    // Create a copy of the arrays to avoid duplicates
    const rulesCopy = [...this.cardRules];
    const infoCopy = [...this.gameInfo];

    // Select random rules
    for (let i = 0; i < this.numberOfItems && rulesCopy.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * rulesCopy.length);
      this.randomRules.push(rulesCopy[randomIndex]);
      rulesCopy.splice(randomIndex, 1); // Remove the selected item to avoid duplicates
    }

    // Select random info items
    for (let i = 0; i < this.numberOfItems && infoCopy.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * infoCopy.length);
      this.randomInfos.push(infoCopy[randomIndex]);
      infoCopy.splice(randomIndex, 1); // Remove the selected item to avoid duplicates
    }
  }

  // Method to refresh random content
  refreshContent(): void {
    this.getRandomContent();
  }
}
