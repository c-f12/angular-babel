//Forma Node de traernos las extensiones Rx:
var Rx = require('rxjs/Rx');

//Forma imports de ES6. Importar todo, i.e, * de rxjs/Rx
//import * as Rx from 'rxjs/Rx';

let aDatos=[1,2,3,4,5,6];

//Se disparan 3 eventos: 3 por los que pasan el filtro y el completed.
const observable = Rx.Observable
.from(aDatos)
.map( x => x*x )
.filter( x => x>15 );

observable.subscribe(
    function onNext(x) { console.log('Next ' + x) },
    function onError(err) {console.log('Error: ' + err)},
    function onCompleted(){console.log('Completed')}
);

aDatos.push(7);

observable.subscribe(
    function onNext(x) { console.log('Siguiente ' + x) },
    function onError(err) {console.log('Error: ' + err)},
    function onCompleted(){console.log('Se acabó')}
);

//Rx.Observer.create([onNext], [onError], [onCompleted])
//El observable va cambiando de valor y va diciendo cuánto vale.
//En el observer definimos 3 tipos de eventos que van respondiendo al observable.
/* const observador = Rx.Observer.create(
    function onNext(x) { console.log('Next ' + x) },
    function onError(err) {console.log('Error: ' + err)},
    function onCompleted(){console.log('Completed')}
); */

//El observador se suscribe al observable:
//observable.subscribe(observador);



