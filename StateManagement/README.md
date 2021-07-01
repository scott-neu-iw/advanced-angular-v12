# State Management Workshop
### Slide 8 - Subjects
https://rxjs-dev.firebaseapp.com/guide/subject

https://angular.io/guide/component-interaction

### Slide 12
models/value-pair.model.ts
```
export class ValuePair {
  private _previousValue: number;
  private _value: number;

  constructor() {
    this._previousValue = 0;
    this._value = 0;
  }

  public set value(value: number) {
    this._previousValue = this._value;
    this._value = value;
  }
  public get value(): number {
    return this._value;
  }

  public get previousValue(): number {
    return this._previousValue;
  }
}
```
### Slide 13
services/counter-state.service.ts
```
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ValuePair } from '../models/value-pair.model';

@Injectable({
  providedIn: 'root',
})
export class CounterStateService {
  private valuePair = new ValuePair();

  public valueChanged = new BehaviorSubject<ValuePair>(this.valuePair);

  constructor() {
    console.log('CounterStateService.ctor');
  }

  public incrementValue(offsetValue: number) {
    console.log('CounterStateService.incrementValue');
    this.valuePair.value = this.valuePair.value + offsetValue;
    this.valueChanged.next(this.valuePair);
  }
}
```
### Slide 14
components/left-side/counter-action/counter-action.component.ts
```
export class CounterActionComponent implements OnInit {
  constructor(private counterSvc: CounterStateService) { }
```
```
  public buttonClicked(value: number) {
    this.counterSvc.incrementValue(value);
  }
```
### Slide 15
components/right-side/counter-result/counter-result.component.ts
```
  public value: number;
  constructor(private counterSvc: CounterStateService) {
    this.counterSvc.valueChanged.subscribe(data => {
      this.value = data.newValue;
    });
  }
```
### Slide 16
components/routable-parent.component.ts
```
  constructor(private counterSvc: CounterStateService) {
    this.counterSvc.valueChanged.subscribe(data => {
      this.updateMessage(data);
    });
  }
```
```
  private updateMessage(data: ValuePair) {
    this.actionDetected = `Value Change Detected -- Old Value: ${data.oldValue}, New Value ${data.newValue}`;
  }
```


### Slide 17
components/routable-parent.component.ts
```
export class RoutableParentComponent implements OnInit, OnDestroy {
  public actionDetected: string;
```
```
  ngOnDestroy(): void {
    this.counterSvc.valueChanged.complete();
  }
```
