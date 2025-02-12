let a = ['cups', 'plates', 'forks', 'spoons', 'knives']
console.log(a[3])

for(let i=0; i<a.length; i++){
    console.log(a[i])
}

a.push('glasses')
console.log(a)

a.pop(a)
console.log(a)

a.shift(a)
console.log(a)


a.unshift('napkins')
console.log(a)
