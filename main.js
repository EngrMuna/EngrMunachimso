/*  let cars = {
  name: "Venza",
  year: 2020,
  color : "Navy blue",
  model: function () {
  return  this.name + " " + this.year
  }
}
console.log(cars.model());
 */
 
 /* let cars = ["Toyota", "Lexus", "Volkswagen", "Benz"];
 for (let i = 0; i < cars[2].length; i++) {
   
 console.log(cars[1 * 2][i]);
 } */
 
 let numb = [45, 78, 102, 18, 21, 15, 29, 25, 5, 20, 10, 28];
 let points = numb.sort(function(a,b) {
   return a - b;
 });
 
 console.log(points);
 
 
 let names = ["Uche", "Munachimso", "Chimudi", "Kelechi", "Amarachi", "Chinemerem"];
 
 console.log(names);
 console.log(names.sort());