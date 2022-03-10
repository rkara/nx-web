import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Voter } from 'src/app/shared/interfaces/voter';

const DISPLAY_COLUMNS = [
  {
    name: 'Status',
    key: 'status',
  },
  {
    name: 'County',
    key: 'countyName',
  },
  {
    name: 'First Name',
    key: 'firstName',
  },
  {
    name: 'Last Name',
    key: 'lastName',
  },
  {
    name: 'Party',
    key: 'partyAffiliation',
  },
];

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.scss']
})
export class VoterListComponent implements OnChanges, AfterViewInit {
  @ViewChild(MatPaginator)
  private paginator?: MatPaginator;

  @ViewChild(MatSort)
  private sort?: MatSort;

  @Input()
  voters: Voter[] = [];  

  get displayedColumns() {
    return this.columns.map(d => d.key);
  }

  dataSource = new MatTableDataSource<Voter>([]);
  columns = DISPLAY_COLUMNS;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.voters) {
      this.dataSource.data = this.voters;
    }
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

}
