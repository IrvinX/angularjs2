import { Injectable }    from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Player } from '../core/player';

// 临时停靠，多多关照
import { PLAYERS } from '../repository/mock-players';

@Injectable()
export class PlayerService {

  getPlayers(): Promise<Player[]> {
    return Promise.resolve(PLAYERS);
  }

  getPlayer(player_id: number): Promise<Player> {
    return this.getPlayers()
               .then(players => players.find(player => player.player_id === player_id));
  }
}
