function solve(input){
    let figure = String(input[0]);
    
    if(figure == "square"){
        let a = Number(input[1]);
        let sum = a * a;
        console.log(sum.toFixed(3));
    }
    else if(figure == "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let sum = a * b;
        console.log(sum.toFixed(3));
    }
    else if (figure == "circle"){
        let r = Number(input[1]);
        let sum = r * r * Math.PI;
        console.log(sum.toFixed(3));
    }
    if (figure == "triangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let sum = (a*b)/2;
        console.log(sum.toFixed(3));
    }
}
solve(["circle",
"6"]
)