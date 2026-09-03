const kgToGMConverter = (input) => {
if(typeof input === "number"){
    return input*1000;
}
else if(typeof input === "string"){
    input = input.split(" ");
    const [value] = input;
    const ConvertedNumber = Number(value);
    return ConvertedNumber*1000;
}
}

const result1 = kgToGMConverter(2);
console.log(result1);

const result2 = kgToGMConverter("5 kg");
console.log(result2);