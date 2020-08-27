// From one or multiple values
Rx.Observable.of('foo', 'bar').subscrible(x => console.log(x));

const appleObservables = of ('apple1', 'apple2');

appleObservables.subscrible(x => console.log(x));