import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private static USER_DATA : any = [
  {"id":1,"name":"Erick Riley","avatar":"svg-1",
  "bio":"I have, have together. Day green own divide wherein. Seas the make days him fish night their don't",
  "birthDate":"1980-02-04T00:00:00",
  "notes":[
    {"id":1,"title":"Pay back dinner","date":"2020-06-28T06:46:10.3448816Z"},
    {"id":2,"title":"Buy flowers for birthday","date":"2020-07-10T06:46:10.345275Z"},
    {"id":3,"title":"Do something","date":"2020-07-20T06:46:10.3452759Z"},
    {"id":4,"title":"Make something","date":"2020-07-30T06:46:10.3452761Z"},
    {"id":5,"title":"Be something","date":"2020-08-09T06:46:10.3452764Z"}]},
  {"id":2,"name":"Levi Neal","avatar":"svg-2",
  "bio":"Won't light from great first years without said creepeth a two and fly forth subdue the, don't our make.",
  "birthDate":"1987-05-20T00:00:00","notes":[]},
  {"id":3,"name":"Sandy Armstrong","avatar":"svg-3",
  "bio":"Make beginning midst life abundantly from in after light. ",
  "birthDate":"1975-10-11T00:00:00","notes":[]
  },
  {"id":4,"name":"Marcia Higgins","avatar":"svg-4",
  "bio":"Made whales called whose. ",
  "birthDate":"1983-03-16T00:00:00","notes":[]
  }
]

  private _users: BehaviorSubject<User[]>;
  
  private dataStore: {
    users: User[]
  }

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  addUser(user: User): Promise<User> {
    return new Promise((resolver, reject) => {
      user.id = this.dataStore.users.length + 1;
      this.dataStore.users.push(user);
      this._users.next(Object.assign({}, this.dataStore).users);
      resolver(user);
    });
  }

  userById(id: number) {
    return this.dataStore.users.find(x => x.id == id);
  }

  loadAll() {
    this.dataStore.users =UserService.USER_DATA
    this._users.next(Object.assign({}, this.dataStore).users);      
  }

}
