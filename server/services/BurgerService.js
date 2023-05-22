import { FakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"


class BurgerService {
  createBurger(newBurgerData) {
    newBurgerData.id = ~~(Math.random() * 9999999) + 'b'
    FakeDb.burgers.push(newBurgerData)
    return newBurgerData
    
  }
  editBurger(newBurgerData) {
    const burger =  this.getBurgerById(newBurgerData.id)
    burger.name = newBurgerData.name || burger.name
    burger.picture = newBurgerData.picture || burger.picture
   

    return burger
    
  }
  getBurgerById(Id) {
    const burger = FakeDb.burgers.find(b => b.id == Id)
    if (!burger) {
      throw new BadRequest('Invalid Burger Id')
    }
    return burger
      
    }
 
  getBurgers() {
    return FakeDb.burgers
  }


}



export const burgerService = new BurgerService