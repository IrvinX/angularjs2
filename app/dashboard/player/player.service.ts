import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Player } from './player';
// 临时停靠，多多关照
// import { PLAYERS } from '../../repository/mock-players';

@Injectable()
export class PlayerService {

  private playersUrl = 'app/players';  // URL to web api

  private headers = new Headers({ 'Content-Type': 'application/json' });

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

  getPlayers(): Promise<Player[]> {
    return this.http.get(this.playersUrl)
      .toPromise()
      .then(response => response.json().data as Player[])
      .catch(this.handleError);
  }

  getPlayer(id: number): Promise<Player> {
    return this.getPlayers()
      .then(players => players.find(player => player.id === id));
  }

  update(player: Player): Promise<Player> {
    debugger;
    const url = `${this.playersUrl}/${player.id}`;
    return this.http
      .put(url, JSON.stringify(player), { headers: this.headers })
      .toPromise()
      .then(() => player)
      .catch(this.handleError);
  }

  create(name: string): Promise<Player> {
    return this.http
      .post(this.playersUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.playersUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}
