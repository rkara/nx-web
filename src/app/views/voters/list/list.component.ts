import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CountyCollection } from 'src/app/shared/interfaces/counties';
import { Voter, VoterQuery } from 'src/app/shared/interfaces/voter';
import { CountiesService } from 'src/app/shared/services/counties.service';

const GET_VOTERS = gql`
  query GetVoters {
    ohio_voters {
      CITY
      COUNTY_NUMBER
      DATE_OF_BIRTH
      FIRST_NAME
      LAST_NAME
      PARTY_AFFILIATION
      RESIDENTIAL_ADDRESS1
      RESIDENTIAL_CITY
      RESIDENTIAL_COUNTRY
      RESIDENTIAL_POSTALCODE
      RESIDENTIAL_SECONDARY_ADDR
      RESIDENTIAL_STATE
      RESIDENTIAL_ZIP
      SOS_VOTERID
      VOTER_STATUS
    }
  }
`;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  counties$?: Observable<CountyCollection[]>;
  voters$?: Observable<Voter[]>;

  constructor(
    private counties: CountiesService,
    private apollo: Apollo,
  ) { }

  ngOnInit(): void {
    this.counties$ = this.counties.getCountyCollection$();
  }

  onSearch(contract: VoterQuery, countyCollection: CountyCollection[]) {
    const counties = countyCollection.find(c => c.state === contract.state)?.counties;
    this.voters$ = this.apollo.watchQuery<any>({
      query: GET_VOTERS
    })
      .valueChanges.pipe(
        map(response => {
          const data = response.data;
          if (!data) {
            return undefined;
          }
          return data.ohio_voters.map(
            (voter: any) => {
              return {
                id: voter.SOS_VOTERID,
                status: voter.VOTER_STATUS,
                city: voter.CITY,
                countyNumber: voter.COUNTY_NUMBER,
                countyName: counties?.find(c => c.id === parseInt(voter.COUNTY_NUMBER, 10))?.name,
                firstName: voter.FIRST_NAME,
                lastName: voter.LAST_NAME,
                partyAffiliation: voter.PARTY_AFFILIATION,
                residentialAddress: voter.RESIDENTIAL_ADDRESS1,
                residentialCity: voter.RESIDENTIAL_CITY,
                residentialCountry: voter.RESIDENTIAL_COUNTRY,
                residentialPostalCode: voter.RESIDENTIAL_POSTALCODE,
                residentialSecondaryAddress: voter.RESIDENTIAL_SECONDARY_ADDR,
                residentialState: voter.RESIDENTIAL_STATE,
                residentialZip: voter.RESIDENTIAL_ZIP,
              };
            });
        })
      )
  }
}
