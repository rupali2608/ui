var arr = ["rupali","amol","shinde"];
const arr2 = arr.map((value) => value+"hello");
    
    console.log(arr2);
// console.log(arr2);

var city = ["pune","mumbai","parbhani","aurangabad"];
var city2 = city.filter((city)=> city.length>5);
console.log(city2);

var marks = [20, 12, 24, 25, 27];
marks.forEach((value, index,arr)=>{
    console.log('a['+ index +']='+ value)
});