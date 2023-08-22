
// function showDetails(options = {}) {
//   let defaultValues = {
//     courseName: "default name",
//     courseDuration: "default Duration",
//     courseOwner: "default name",
//   };

//   Object.assign(defaultValues, options);
//   console.log(
//     `courseName=${defaultValues.courseName},
//     courseDuration=${defaultValues.courseDuration} ,
//     courseOwner=${defaultValues.courseOwner}`
//   );
// }

// showDetails({
//   courseName: "js",
//   courseDuration: 25,
//   courseOwner: "Mohamed Mokhtar",
// });




/************************************* */


// let person = {
//   name: "mohamed ",
//   age: 25,
//   address: "Zagazig",
// };

// let handler = {
//   get: function (target, prop) {
//     if (!(prop in target)) {
//       throw `${prop} Not founded in person`;
//     } else {
//       return target[prop];
//     }
//   },
//   set: function (target, prop, value) {
//     if (
//       prop == "name" &&
//       (typeof value !== "string" || /\d/.test(value) || value.length != 7)
//     ) {
//       throw new Error("Wrong  name");
//     } else {
//       target[prop] = value;
//     }

//     if (prop == "address" && typeof value !== "string") {
//       throw new Error("Invalid  address");
//     } else {
//       target[prop] = value;
//     }
//     if (
//       (prop == "age" && typeof value !== "number") ||
//       value > 60 ||
//       value < 25
//     ) {
//       throw new Error("Invalid  age");
//     } else {
//       target[prop] = value;
//     }
//   },
// };
// let myProxy = new Proxy(person, handler);

// myProxy.name = "mcms1ll";

// console.log(myProxy.name);


/********************************** */


class shape {
#length;

constructor (length  ) {
    this.#length=length
    
}

}

export class rectangle extends shape {
    constructor (length , width) {
        super(length)
        this.width= width 
    }
 calcArea (length,width) {
    let area = length*width;
    return area
}
   calcPerm(length,width){

    let perm = 2*(length+width)

    return perm
   } 
   toString(){
    return `Area = ${this.calcArea} , permiter =${this.calcPerm}`
}

}

export class square extends shape{
constructor(length){
    super(length)
}
calcArea (length){
    let area= length*length;
    return area 
    
}
calcPerm (length)
{
    let perm=4*length;

    return perm

}
toString(){
    return `Area = ${this.calcArea} , permiter =${this.calcPerm}`
}
}

export class circle extends shape {
    constructor (length){
        super(length)
    }

    calcArea(length){
        let area= 3.14*length
    return area 
    }

calcPerm (length){
    let perm=2*3.14*length
return perm
}
toString(){
    return `Area = ${this.calcArea} , permiter =${this.calcPerm}`
}

}