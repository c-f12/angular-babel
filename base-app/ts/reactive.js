//Forma Node de traernos las extensiones Rx:
var Rx = require('rxjs/Rx');

//Forma imports de ES6. Importar todo, i.e, * de rxjs/Rx
//import * as Rx from 'rxjs/Rx';

let aDatos=[1,2,3,4,5,6];

const observable = Rx.Observable
.from(aDatos)
.map( x => x*x )
.filter( x => x>15 );

observable.subscribe(
    function onNext(x) { console.log('Next ' + x) },
    function onError(err) {console.log('Error: ' + err)},
    function onCompleted(){console.log('Completed')}
);

//Rx.Observer.create([onNext], [onError], [onCompleted])

/* const observador = Rx.Observer.create(
    function onNext(x) { console.log('Next ' + x) },
    function onError(err) {console.log('Error: ' + err)},
    function onCompleted(){console.log('Completed')}
); */

//El observador se suscribe al observable:
//observable.subscribe(observador);



