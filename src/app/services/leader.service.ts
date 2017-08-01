import { Injectable } from '@angular/core';
import { Leader }  from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Rx';

// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/switchMap';


@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return Observable.of(LEADERS).delay(2000);
  }

  getLeader(id: number): Observable<Leader>{
    return Observable.of(LEADERS.filter((leader) => (leader.id == id))[0]).delay(2000);
  }

  getFeaturedPromotion(): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000);
  }

}
