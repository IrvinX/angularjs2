import { Injectable }    from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Player } from '../core/player';
import {LeagueService} from './league.service';
// 临时停靠，多多关照
import { PLAYERS } from '../repository/mock-players';

@Injectable()
export class PlayerService {
  pl : Player;
  constructor(
    private leagueService: LeagueService) { }

  getPlayers(): Promise<Player[]> {
    return Promise.resolve(PLAYERS);
  }

  getPlayer(player_id: number): Promise<Player> {
    // this.leagueService.getLeague();
    return this.getPlayers()
               .then(players => players.find(player => player.player_id === player_id));
  }
}
