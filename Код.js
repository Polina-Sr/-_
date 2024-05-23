const fs = require('fs')
let Bi = [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,11,12,13,14,15,16,17,18]
let S = 1
let P = 0
for (let i = 0; i < Bi.length; i++) {
    if (Bi[i] >= 0){
        S*= Bi[i]
    } 
    else{
        P+= Bi[i] 
    }
  }
  console.log(S)
  console.log(P)
  if (Math.abs(S) > Math.abs(P)){
    SP = Math.abs(S) - Math.abs(P)
    fs.writeFileSync('Документ.txt',"Произведение положительных больше суммы отрицательных элементов на " + String(SP))
    console.log("Произведение положительных больше суммы отрицательных элементов на",SP)
  }
  else{
    PS = Math.abs(P) - Math.abs(S)
    fs.writeFileSync('Документ.txt',"Сумма отрицательных больше произведения положительных элементов на " + String(PS))
    console.log("Сумма отрицательных больше произведения положительных элементов на",PS)
  }

  

  