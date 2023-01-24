import { Animal } from "./Animal";
import { Dog } from "./Dog"
import { Cat } from "./Cat"

class Runner{
  dog: Animal = new Dog();
  cat: Animal = new Cat();

   main(): void{
    this.dog.makeSound();
    this.cat.makeSound();
  }
}

const runner = new Runner();
runner.main();