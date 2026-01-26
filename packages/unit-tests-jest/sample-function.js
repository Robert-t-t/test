function div(a,b){
    return a / b;
}

function containsNumber(text){
    for(let i = 0; i < text.length; i++){
        if(!isNaN(text.charAt(i)) && text.charAt(i) !== " ")
            return true;
    }
    return false;
}

exports.div = div;
exports.containsNumber = containsNumber;