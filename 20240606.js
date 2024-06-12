/* months with 31 days: 1 3 5 7 8 10 12
months with 30 days: 2 4 6 9 11
leap year Feb is 29 or not 28
*/

const givenYear = 2025;
if((givenYear % 4 == 0 && givenYear % 100 !=0) || givenYear % 400 == 0) {
    console.log(`${givenYear} is a Leap year`);
} else {
    console.log(givenYear + "is common year");
}


/* 2 toonii ih arithmatic argaar oloh */

let xx = 5;
let yy = 2;
let zz = xx * yy;


let toon1 = 5;
let toon2 = 2;

let niilbertoo = toon1 + toon2


/* tegsh untsugt gurvaljingiin talbaig ol */ 
        let x = 2
        let y = 4

        let z = (x*y)/2
        console.log(z);

/* order */
        let negj = 2
        let negt = 3
        let negz = 9
        console.log(sort(negt, negj, negz));

        const points = [34, 12, 90];
        points.sort (function (a, b){return b - a});
        

/* A toog B toond huvaahad garah nogdvor ba uldegdliig ol */
        let a = 2
        let b = 4
        let p = (a/b)
        console.log (p);