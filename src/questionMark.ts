// ?: ternary operator
// ?? : nullish coalescing operator === only for null and undefined
// ?. optional chaining 

const biyerJonnoEligible = (age: number) => 
{
    const result = age >= 21 ? "You are eligible for marriage" : "Sorry, Age boro how";
    console.log(result)
}

biyerJonnoEligible(19)