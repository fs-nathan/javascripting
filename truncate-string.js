function truncateString(str, maxLength){
    if(str.length > maxLength)
        
    return str.slice(0, 5) + '...'
    else
        return str
}
 module.exports = truncateString