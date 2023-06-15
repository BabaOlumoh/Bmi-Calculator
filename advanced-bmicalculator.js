function bmiCalculator(weight, height){
    weight = prompt("enter your weight in kg");
    height = prompt("enter your height in meters");
    let interpretation = weight/Math.pow(height, 2);
        if(interpretation < 18.5){
        console.log("Your BMI is " + interpretation + ", so you are underweight.");
    }
    else if(interpretation >= 18.5 && interpretation <= 24.9){
        console.log("Your BMI is " + interpretation + ", so you have a normal weight.");
    }
    else if(interpretation > 24.9){
        console.log("Your BMI is " + interpretation + ", so you are over weight.");
    }
    return interpretation;
}

bmiCalculator(weight, height);