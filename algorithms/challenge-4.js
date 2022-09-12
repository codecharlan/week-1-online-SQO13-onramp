function calculateGrade(marks) {
 let addGrades = marks.reduce(avg = (a,b) => a+b)
 let result = addGrades/marks.length
   if(result <= 49){
      return "F"
  }
    else if (result >=50 && result <= 59){
      return "E"
     }
    else if (result >=60 && result <= 69){
      return "D"
        }
    else if (result >=70 && result <= 79){
      return "C"
    }
    else if (result >=80 && result <= 89){
      return "B"
    }
    else if (result >=90 && result <= 100){
      return "A"
    }
}
  module.exports =calculateGrade
