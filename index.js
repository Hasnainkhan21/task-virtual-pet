var pet = {
    name: "Cat",
    age: 5,
    happiness: 84,
    hunger: 45,
    feed: function() {
        alert("the feeding is" + this.hunger - 20);
    },

    play: function() {
        alert(this.happiness - 20)
    },

    agePet: function() {
        alert(this.age +1 +"and" + thia.happiness - 5 + "and" + this.hunger + 10)
    }
};
console.log(pet)