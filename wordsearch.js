const transpose = function(matrix) { 
    let resultArr = []
    
      for (let i = 0; i < matrix[0].length; i++) {
        let innerArr = []
        // let eatchArr = matrix[i]
        // resultArr.push(eatchArr[0])
        
        for (let value of matrix){
          innerArr.push(value[i])
        }
  
        resultArr.push(innerArr);
    }
    return resultArr  
  };



const wordSearch = (letters, word) => { 
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        console.log(l);
        if (l.includes(word)){
            return true
        } 
            
    }
    const arr = transpose(letters)
    const verticalJoin = arr.map(ls => ls.join(''))
    for (l of verticalJoin) {
        console.log(l);
        if (l.includes(word)){
            return true
        }
    }
return false;   
}


 module.exports = wordSearch;