// Iteration 1: Names and Input

let hacker1 = "Antonio";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Milagros";

console.log(`The navegator's name is ${hacker2}`);

// Iteration 2: Conditionals

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
    console.log(
        `The driver has the longest name, it has  ${hacker1Length} characters`
    );
} else if (hacker1Length < hacker2Length) {
    console.log(
        `It seems that the navigator has the longest name, it has ${hacker2Length} characters`
    );
} else {
    console.log(
        `Wow, you both have equally long names, ${hacker1Length} characters`
    );
}

// Iteration 3: Loops

let upperName = "";

for (let i = 0; i < hacker1.length; i++) {
    upperName = hacker1.toUpperCase();
}

upperName = upperName.split("").join(" ");
console.log(upperName);

let reverseName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName = reverseName + hacker2[i];
}
console.log(reverseName);

if (hacker2.localeCompare(hacker1) === 1) {
    console.log(`The driver's name goes first`);
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

//Bonus

const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit commodo placerat. Duis fringilla ut augue ut ornare. In ornare iaculis tellus id maximus. Ut eu diam ornare, pulvinar est vel, sollicitudin metus. Integer et enim eu est aliquet sodales vel non arcu. Integer feugiat dignissim eros, vel posuere turpis tristique eu. Pellentesque ac mattis ante, id euismod diam. Phasellus eleifend efficitur ante vitae fringilla. Cras scelerisque, nisl in aliquam rutrum, augue felis ullamcorper orci, eu pellentesque ex quam placerat velit. Proin fringilla libero eget odio hendrerit, sit amet maximus lectus viverra. Nunc sodales ut tellus sed posuere. Praesent non nibh est. Pellentesque ut scelerisque mauris. Praesent pharetra, tortor nec consequat pharetra, urna sem suscipit mauris, ut semper eros ligula egestas magna. Integer euismod commodo sollicitudin. Duis quis mi nec justo ullamcorper accumsan in nec enim. Mauris tellus orci, mollis at porta eget, dictum nec tortor. Mauris a diam elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed condimentum tristique pellentesque. In at ullamcorper odio. Nunc pretium euismod erat, interdum tristique enim sagittis condimentum. Morbi non augue euismod, scelerisque lacus eu, commodo eros. Aenean tempor ac lorem vel volutpat. Duis fermentum eu nisl ut mattis. Etiam ut tortor justo. Phasellus et leo non ligula porta euismod. Integer mollis sit amet lacus vitae tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

let count = 0;
let countWords = text.split(" ");
for (i = 0; i < text.length; i++) {
    if (text[i] === " ") {
        count++;
    }
}
console.log(count);

var countEt = text.split(" et ").length - 1;
console.log(countEt);