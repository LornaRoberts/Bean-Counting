const countChar = function (string, char){
    let total = 0;
    
    for (let i = 0; i < string.length; i++){
        if (string[i] === char){
            total += 1;
        }
    }

    console.log(total)
}

countChar("RolyRolyRoly", "R");
