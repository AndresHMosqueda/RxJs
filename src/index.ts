import { of } from 'rxjs';

const obs$ = of(1,2,3,4,5,6)

//Hasta que existe una suscripcion se empezaran a leer los valores del observable
obs$.subscribe(console.log);
