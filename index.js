function persistence(num) {
   if (String(num).length === 1) {
     return 0
   }
   let single = false
   let reps = 0
   let product = String(num).split("").reduce(( a, n )=> Number(n) * a, 1)
   console.log(product)
   while (!single) {
     if (String(product).length === 1) {
       single = true 
     }
     product = String(product).split("").reduce(( a, n )=> Number(n) * a, 1)
     reps += 1
   }
   return reps
}