var pet = {
    name: prompt("What is your pet name"),
    type: prompt("what kind of pet is it"),
    age: +prompt("how old is yor pet"),
    happiness: +prompt("how happy is your pet"),
    hunger: +prompt("how hungry is your pet"),
    feed: function() {
        prompt("What do you want ro d with suzi \n 1.Feed \n 2.Play \n 3.Age \n 4.Quit")
        
    },

    play: function() {
        alert(this.happiness - 20)
    },

    agePet: function() {
        alert(this.age +1 +"and" + thia.happiness - 5 + "and" + this.hunger + 10)
    }
};
console.log(pet)
console.log(pet.feed());