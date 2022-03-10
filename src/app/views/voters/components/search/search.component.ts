import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountyCollection } from 'src/app/shared/interfaces/counties';
import { VoterQuery } from 'src/app/shared/interfaces/voter';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input()
  counties?: CountyCollection[];

  @Output()
  search = new EventEmitter<VoterQuery>();

  get countyItems() {
    const state = this.formGroup.get('state')?.value;
    const collection = this.counties?.find(c => c.state === state);
    if (!collection) {
      return [];
    }

    return collection.counties;
  }

  formGroup = new FormGroup({
    status: new FormControl(''),
    partyAffiliation: new FormControl(''),
    state: new FormControl('Ohio'),
    city: new FormControl(''),
    countyNumber: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSearchButtonClick() {
    const query = this.formGroup.getRawValue();
    this.search.emit(query);
  }
}
