import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPasssService {

  public passingInfo$ = new BehaviorSubject<object>(null);

  constructor() { }

}
