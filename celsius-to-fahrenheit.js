function celsiusToFahrenheit(nhietDo){
    console.log("nhap nhiet do C:")
    let nhietDoF = nhietDo*1.8+32
    return nhietDoF.toFixed(1)
}
module.exports = celsiusToFahrenheit
