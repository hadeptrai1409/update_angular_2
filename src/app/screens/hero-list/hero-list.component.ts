import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../../mock-data/HEROES';
import { monster } from '../../models/monster';
import { MONSTER } from '../../mock-data/MONSTER';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Array<Hero> = HEROES;
  monster: Array<monster> = MONSTER;
  // bài tập về nhà
  // trong màn hình hero-list tạo dữ liệu MONSTER gồm thông tin
  // id , name , image , detail , spells(phép thuật)
  // hiện thị danh sách thông tin của các quái vật ở  bên dưới thông tin của các heros
  constructor() { }

  ngOnInit(): void {
  }

}
