var pet = {
    name: prompt("What is your pet name"),
    type: prompt("What kind of pet is it"),
    age: +prompt("How old is your pet"),
    happiness: +prompt("How happy is your pet"),
    hunger: +prompt("How hungry is your pet"),
    f: +prompt("What do you want to do with your pet \n 1.Feed \n 2.Play \n 3.Age \n 4.Quit"),
    feed: function() {
        if(this.f === 1) {
            this.hunger -= 20;
            alert("Your hunger level is " + this.hunger);
        }
    },
    play: function() {
        if(this.f === 2) {
            this.happiness += 20;
            alert("Your happiness increases up to " + this.happiness);
        }
    },
    agePet: function() {
        if(this.f === 3) {
            this.age += 1;
            this.happiness -= 5;
            this.hunger += 10;
            alert("Your age is " + this.age + ", happiness is " + this.happiness + ", and hunger is " + this.hunger);
        }
    },
    quite: function() {
        if(this.f === 4) {
            alert("Good bye, Thanks for taking care of " + this.name)
        }
    }
};

console.log(pet);
pet.feed();
pet.play();
pet.agePet();
pet.quite()
