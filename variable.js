/*x, y, z

var x = 5
var y = 2
var z = 6 */

/* 7. First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах */
let first name
let last name
let marital status
let country;
let age;


/* 8. Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах */
let first name, last name, marital status, country, age

/* 9.  Гурвалжингийн периметрийг олох */
let x, y, z
let p = x + y + z
console.log(p)

/* 10. Тойргийн талбайг олох */
let num = 5;
let PI = 3.14;
let radius = num ** 2 * PI;
console.log(radius)

/* 11. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол. */
let side1 = 10;
let side2 = 20;
let side3 = 30;
let s = (side1 + side2 + side3) / 2
let A = (s * (s - side1) * (s - side2) * (s - side3)) ** (1 / 2)
console.log(A)

/* 12. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл. */
let c = 50;
let f = 0;
f = c * 1.8 + 32;
console.log(f)

/*14. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*%) гүцэтгээд үр дүнг нь дараах байдлаар харуул;
    Өгөгдсөн 2 тооны нийлбэр нь 25
    Өгөгдсөн 2 тооны ялгавар нь 5 */

let x = 10;
let y = 5;
console.log()

/* 15. cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх */

let cm = 5;
let inch = cm / 2.54;
console.log(inch);


/* OPERATIONS */
/* JS Comparison Operator */
/* 1. 4 нь 3-аас их болон 10 нь 12-оос бага нь үнэн үү ? * /

    let x = 3;
    let y = 3;


/* 12. 4 нь 3-аас их болон 10 нь 12-оос их нь үнэн үү ? */


let a = 4;
let b = 10;

(a > 3 && b > 12);

/* 13. 4 нь 3-аас их эсвэл 10 нь 12-оос бага нь үнэн үү ? */
let x = 4;
let y = 10;

(x = = 3 || y = = 12);


/* 14. 4 нь 3-аас их эсвэл 10 нь 12-оос их нь үнэн үү ? */
let x = 4;
let y = 10;

(x = = 3 || y = = 12);

/* 15. 4 нь 3-аас бага эсвэл 10 нь 12-оос их нь үнэн үү ? */
let x = 4;
let y = 10;

(x < 3 || y > 12);



/* 16. let five = !(4 > 3) ямар хариу буцаах вэ ? */
let five = !(4 - 3);

/* 17. let six = !(4 < 3) ямар хариу буцаах вэ ? */
let six = !(4 < 3);

/* 18. let seven = !(4 > 3 && 10 < 12) ямар хариу буцаах вэ ? */
let seven = !(4 > 3 && 10 < 12);

/* 19. let eight = !(4 > 3 && 10 > 12) ямар хариу буцаах вэ ? */
let eight = !(4 > 3 && 10 > 12);

/* 20. let nine = !(4 === "4") ямар хариу буцаах вэ ? */
let nine = !(4 === "4");

let u = 6;
let m = 3;
(u < 10 && m > 1) + "<br>" +
    (x < 10 && y < 1);

/* 1. 936-г 12д хуваагаад гарсан хариуг 9д хуваахад гарах үлдэгдлийг хэвлэнэ үү. */
        const input = 936
        let result1 = input % 12
        let result2 = result1 % 9;
        console.log(result2);

/* 2. Гараас 0-100 хооронд тоон утга авч 90-100-н хооронд байвал true, бусад утгад false буцаа. */
        const number = 95;
        if (90 < number && number < 100) {console.log("True")} 
        else {console.log("False")};

/* 3. Он, сараа гараас оруулахад тухайн сар хэд хоногтой болохыг харуул. */

/* 4. Өгөгдсөн эерэг тоо нь 3 эсвэл 7-ын үржвэр эсэхийг шалгана уу. */

/* 5. Өгөгдсөн тооны тэгш эсвэл сондгой эсэхийг шалгана уу. */
        const toonii = 3
        if (toonii % 2 == 0) {console.log ("even")}
        else {console.log ("odd")};

/* 6. Өгөгдсөн тооны эерэг тоо эсвэл сөрөг тоо болохыг шалгаад хэвлэж харуулна уу. */
        const tooniih = -1
        if (tooniih > 0) {console.log ("positive")}
        else {console.log ("negative")};

/* toog eremble */
        function ascendingNum() {
                let arr = [34,12,90];
                let output = arr.sort((a,b) =>a-b);
                return output;
                console.log (ascendingNum());
        }
        const points = [34, 12, 90];
        points.sort (function (a,b){return b-a});

/* a ih bol a b ih bol b hevleh*/

const a = 10

if (a>b) {
    console.log(a)
} else {console.log(b)}

/* 4 tooni ihiig oloh */

const too = 110;



let too1 = 2
let too2 = 3
let too3 = 4
let too4 = 5

let max = math.max(2, 3, 4, 5);

console.log(max (too1, too2, too3, too4))


if (100 < too && too < 150) {
    console.log('true')
} else {
    console.log('false')
}

/* 2 toonii ihiig oloh*/
        let t1 = 4
        let t2 = 11

        if (t1>t2) {console.log ("t1")}
        else {console.log ("t2")};

/* 3 toonii ihiig oloh */
        let x1 = 2
        let x2 = 4
        let x3 = 9

        if (x1>x2) {console.log ("x1")}
        else if (x2>x3) {console.log ("x2")}
        else {console.log ("x3")};

/* 4 toonii ihiig oloh */
        let y1 = 2
        let y2 = 4
        let y3 = 1
        let y4 = 9

        if (y1>y2) {console.log ("y1")
        else if (y2>y3) {console.log ("y3")}}
            else if (y3>y4) {console.log ("y4")}
        else {console.log ("y1")};

     

/* 2 toonii ih arithmatic argaar oloh */

        let toon1 = ;
        let toon2 = 2;

        let niilbertoo = toon1 + toon2;

/* gurvaljingiin 3 tal uguud gurvaljin eseh mun u shalgah */ 
/* 2 taliin niilber nuguu talaas ers ih bol gurjaljin mun */        
        let l1 = 0
        let l2 = 2
        let l3 = 10

        if ((l1 + l2)>l3){console.log("triangle")}
        else if ((l1 + l3)>l2) {console.log("not a triangle")}
        else if ((l2 + l3)>l1) {console.log ("not b triangle")}
        else {console.log("not c triangle")};

        const xxx = 1
        const yyy = 2
        const result = (xxx + yyy) - (math.abs(xxx - yyy))/2;