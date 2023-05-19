import { Component } from '@angular/core';
import { COUNTRIES } from '../countries.mock-data';
import { CountryInterface } from '../country-interface';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  countriesList: CountryInterface [] = COUNTRIES;
  selectedCountryCapital!: string;

  onSelect(country: CountryInterface): void {
    this.selectedCountryCapital = country.capital;
  }
}
