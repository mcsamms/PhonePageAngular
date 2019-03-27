import { Component, OnInit } from '@angular/core';
import { Phone} from '../models/phone';

@Component({
  selector: 'app-phones-starter',
  templateUrl: './phones-starter.component.html',
  styleUrls: ['./phones-starter.component.css']
})
export class PhonesStarterComponent implements OnInit {

  constructor() { }

  title = 'Phones!';
  phone1 : Phone;
  phone2 : Phone;
  phone3 : Phone;

  ngOnInit() {
    this.phone1 = new Phone();
    this.phone2 = new Phone();
    this.phone3 = new Phone();

    this.phone1.make = "iPhone";
    this.phone1.model = "8s";
    this.phone1.manufacturer = "Apple";
    this.phone1.os = "iOS";
    this.phone1.memory = "16GB";
    this.phone1.storage = "64GB";
    this.phone1.cpu = "Quad Core A7";
    this.phone1.resolution = "640x480";
    this.phone1.baseCost = 800;
    this.phone1.baseMonthlyContract = 30;
    this.phone1.contractInMonths = 36;
    this.phone1.calculateMonthlyPayment();
    this.phone1.thumbnailPath = "/assets/img/iphone8.png";

    this.phone2.make = "Google Pixel";
    this.phone2.model = "Pixel XL";
    this.phone2.manufacturer = "Google";
    this.phone2.os = "Android";
    this.phone2.memory = "26GB";
    this.phone2.storage = "64GB";
    this.phone2.cpu = "Quad Core A7";
    this.phone2.resolution = "640x480";
    this.phone2.baseCost = 800;
    this.phone2.baseMonthlyContract = 30;
    this.phone2.contractInMonths = 36;
    this.phone2.calculateMonthlyPayment();
    this.phone2.thumbnailPath = "/assets/img/googlepixel.png";

    this.phone3.make = "Galaxf";
    this.phone3.model = "S9";
    this.phone3.manufacturer = "Samsung";
    this.phone3.os = "Android";
    this.phone3.memory = "36GB";
    this.phone3.storage = "64GB";
    this.phone3.cpu = "Quad Core A7";
    this.phone3.resolution = "640x480";
    this.phone3.baseCost = 800;
    this.phone3.baseMonthlyContract = 30;
    this.phone3.contractInMonths = 36;
    this.phone3.calculateMonthlyPayment();
    this.phone3.thumbnailPath = "/assets/img/iphone8.png";
  }

}
