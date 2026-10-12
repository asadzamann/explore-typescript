const friends : string[] = ['Rohim' ];

type genericArray<> = Array<number>;

const friend : genericArray = ["aa", 43];
//heree aa is a string so it's not assignable

type genericArrays<t> = Array<t>;

const friend2 : genericArrays<string> = ["aa", 43];

// here 43 is not assignable because I declared the as string in generic. 

//Below I wrote array of objects


const friend3 : genericArrays<{name: string, age: number}>= [{
    name: "Hasan",
    age: 22,
},

{
    name: "Fahad",
    age: 21,
},

{
    favoriteColor: "red",
}
]


//here we can see, in array of objects I declared the values of name and age in generic object, so when I put favorite color, it's acted as unknown properties and didn't get through