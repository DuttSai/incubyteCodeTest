function Add(numbers) { 
    let ans = 0,negativeError =[],n = null;

    // checking whether custom delimeter is present in given string or not
    // if custom delimeter is present extracting custom delimeter from string and removing custom part from the string
    // if custom delimeter is not present, separating the given string with comma/new-line separators 
    if(/^\/\//.test(numbers))
    {
        let delimeter = numbers.charAt(2)
        numbers = numbers.substr(numbers.indexOf('\n')+1)
        n = numbers.split(delimeter)
    }
    else{
        n = numbers.split(/,|\n/g);
    }
    
    // checking for negative numbers in code, if present pushing the negative numbers in an array
    n.some((n)=>{
        if(n<0){
            negativeError.push(n)
        }
    })

    // throwing error if negative inputs present
    if(negativeError.length > 0) throw new Error('negatives not allowed, the passed negative numbers are : '+[...negativeError])


    // calcuating sum after separating the input string with comma/new-line/custom separators
    for(let i = 0; i < n.length; i++){
        ans += parseInt(n[i] || 0)
    }
    return ans;
}

module.exports = Add