import { Injectable }    from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { League } from '../core/league';

// 临时停靠，多多关照
import { LEAGUES } from '../repository/mock-leagues';

@Injectable()
export class LeagueService {

  getLeagues(): Promise<League[]> {
    return Promise.resolve(LEAGUES);
  }

  getLeague(league_id: number): Promise<League> {
    return this.getLeagues()
               .then(leagues => leagues.find(league => league.league_id === league_id));
  }
}
