document.addEventListener("DOMContentLoaded", init);

function init() {
    // console.log("hello world");
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    // fetchURL(imgUrl);
    fetchURL2(breedUrl);
    fetchURL3(breedUrl);
    


}

function fetchURL(url) {
    fetch(url).then(res => res.json()).then(renderObject);

}
function fetchURL2(url) {
    fetch(url).then(res => res.json()).then(extractData);
}
function fetchURL3(url) {
    fetch(url).then(res => res.json()).then(dropDown);
}

function dropDown(data) {
    const dropDownList = document.querySelector("#breed-dropdown");


    dropDownList.addEventListener("change", (e) => {
        if (e.currentTarget.value === "a") {
            
        } else if (e.currentTarget.value === "b") {
            console.log("b");
        } else if (e.currentTarget.value === "c") {
            console.log("c");
        } else if (e.currentTarget.value === "d") {
            console.log("D");
        }
    })
    
}


function renderObject(data) {
    // debugger;
    const dogImageContainer = document.querySelector("#dog-image-container");
    // console.log(data["message"]);
    data["message"].forEach(element => {
        // console.log(element);
        let img = document.createElement("img");
        img.src = element;
        img.style.width = "150px";
        img.style.height = "100px";
        dogImageContainer.appendChild(img);
        
    });
    
}
function extractData(data) {
    const dogBreedUl = document.querySelector("#dog-breeds");
    const ulTmp = document.createElement("ul");
    dogBreedUl.classList = "listOfUls";
    // let myArray = new Array();
    
    for (const [key, value] of Object.entries(data)) {
        for (const [k, v] of Object.entries(value)) {
            const ul = document.createElement("ul");
            // console.log("Father: " + k);
            ul.innerText = k;
            // console.log(ul);
            if (v.length !== 0) {
                // console.log(k);
                for (let i = 0; i < v.length-1; i++) {
                    const li = document.createElement("li");
                    li.innerText = v[i];
                    // console.log(li);
                    ul.appendChild(li);
                }
            }
            ulTmp.appendChild(ul);
            // console.log(ul); // check counsel
            // myArray.push(ul);
        }
    }
    console.log(ulTmp);
    dogBreedUl.append(ulTmp);
    
}



// function addDogBreeds(data) {
//     const dogBreedUl = document.querySelector("#dog-breeds");
//     // console.log(data);
//     // debugger;
//     // const ent = Object.values(data);
//     // console.log(ent[0]);
//     // // console.log(ent[0]['bulldog']);
//     // for (const j in ent[0]) {
//     //     console.log("Father: " + j);
//     //     for (const i in ent[0][j]) {
//     //         console.log("Son " + ent[0][j][i]);
//     //     }
//     // }


//     let arr = [];
//     let counter = 0;
//     for (const key in data["message"]) {
//         for (const subKey in data["message"][key]) {
//             // debugger
//             let msg = key;
//             let msgDChild = data["message"][key];
//             // console.log("Father: " + msg ,"From 75: " +msgDChild);
//             let chidlMsg = data["message"][key][subKey];
//             // console.log(key, data["message"][key][subKey]);
//             // tmpObj[key] = data["message"][key][subKey];
//             // console.log(data);
//             // createNewData(msg, msgDChild,chidlMsg);
//         }
//         arr.push(key);
        
//     }
//     console.log(arr);

// }

// function createNewData() {

// }

function appendToUl(key, subkey ,value) {
    let eachObj = key +", " + value;
    let myAnimals = eachObj.split(", ");
    let head = myAnimals[0];
    let children = [];
    for (let i = 1; i < myAnimals.length; i++) {
        if (myAnimals[i]) {
            children[i-1] = myAnimals[i];
        }
    }
    // console.log(head,children);
    // console.log(myAnimals);
    
    // console.log(key, value);
    // console.log(key, subkey, value);
    // console.log(value);
    // let tmpobj = {
    //     name: key, val: value
    // }
    // console.log(tmpobj);
    // let arr3 = arr1.map((item, i) => Object.assign({}, item, arr2[i]));

    // console.log(arr3);
    // let tmpObject = {breed: key, child: value}
    // console.log(tmpObject);
    const ulElement = document.querySelector("#dog-breeds");
    // const tmpContainer = 
    const li = document.createElement("li");
    const li1 = document.createElement("li");
    li.innerHTML = myAnimals[0];
    children.forEach(x => {
        li1.innerText = "_____" + x;
        li.appendChild(li1);
    });

    // if (myAnimals.length > 1) {
    //     li.innerHTML = myAnimals[0];
    //     // console.log(myAnimals[0]);
    //     for (let i = 1; i < myAnimals.length; i++) {
    //         li1.innerHTML = "-" + myAnimals[i];
    //         li.appendChild(li1);

    //     }
    // } else {
    //     li.innerHTML = myAnimals[0];
    // }
    
    li.addEventListener("click", () => {
        li.style.color = "blue";
    })
    ulElement.appendChild(li);
}
