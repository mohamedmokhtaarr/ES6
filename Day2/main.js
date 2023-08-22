


/* iteration*/
/* array task
array iteration by @@iter

let arr =["mona","ahmed","ali"];
arr [Symbol.iterator]=myFunc;

function myFunc (){
let step =0;
return{
	next :function(){

		if (step<=arr.length){
			let values =arr[step]
			step+=1;
	
			return{
				value : values,
				done : false,
			};
			
			
		}
		else {
			return{
				value: undefined,
				done: true,
			};
		}

	}
}
}
let iter = myFunc()
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());





array iteration by generator

let arr =["mona","ahmed","ali"];

arr[Symbol.iterator] = myFunc;
	function* myFunc (){
		for (let i=0;i<=arr.length;i++)
		yield arr[i];
	}

	for (let i of arr)
	console.log(i);
*/

/* object task

object iteration by @@iter

let person = {
    fname: "ahmed",
    lname: "ali",
    age: 19
};
person["color"]= "red"
person["family"]= "Mokhtar"

person[Symbol.iterator] = myFunc;

function myFunc() {
    
    let keys = Object.keys(person);
    let step = 0;

    return {
        next: function () {
            if (step < keys.length) {
                let key = keys[step];
                step += 1;

                return {
                    value: person[key], 
                    done: false
                };
            } else {
                return {
                    value: undefined,
                    done: true
                };
            }
        }
    };
}

let iter = myFunc(); 
console.log(iter.next()); 
console.log(iter.next()); 
console.log(iter.next()); 
console.log(iter.next()); 
console.log(iter.next()); 
console.log(iter.next()); 










object iteration by generator


let person = {
	    fname: "ahmed",
	    lname: "ali",
	    age: 19
	};
	person[Symbol.iterator] = myFunc;
	 let key=Object.values(person)
	function* myFunc (){
		for (let i=0;i<=key.length;i++)
		yield key[i];
	}

	for (let i of person)
	console.log(i);
*/

/* Promising then & catch

let response = fetch("https://jsonplaceholder.typicode.com/users").then(
	(response)=>{
		return response.json();
}).then((data)=>{
	console.log(data);
})
.catch((error)=>{
	console.log(error);
})

*/



/* Dynamic Button

function displayUserDetails(user) {
    const userIdElement = document.getElementById("user-id");

    const userNameElement = document.getElementById("user-name");
    const userEmailElement = document.getElementById("user-email");
   
    userIdElement.textContent = user.id;

    userNameElement.textContent = user.name;
    userEmailElement.textContent = user.email;
    
}

function createButtonsFromJSON(jsonData) {
    const buttonContainer = document.getElementById("button-container");

    jsonData.forEach(user => {
        const button = document.createElement("button");
        button.textContent = user.name;

        button.addEventListener("click", function() {
            displayUserDetails(user);
        });

        buttonContainer.appendChild(button);
    });
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        createButtonsFromJSON(data);
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });


*/
 