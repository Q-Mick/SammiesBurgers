import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";


export class BurgerController extends BaseController{
constructor(){
  super('api/burgers')
    this.router
    .get('', this.getBurgers)
    .get('/:id', this.getBurgerById)
    .put('/:id', this.editBurger)
    .post('',this.createBurger )
}

async createBurger(req, res, next) {
  try {
  const burger = await burgerService.createBurger(req.body)
  res.send(burger)
  } catch (error) {
    next(error)
  }
}
  async editBurger(req, res, next) {
    try {
      logger.log(req.params.id)
      const burger = await burgerService.editBurger(req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
  async getBurgerById(req, res, next) {
    try {
      logger.log(req.params.id)
      const burger = await burgerService.getBurgerById(req.params.id)
      res.send(burger)
    } catch (error) {
      next(error)
    }


  }
  async getBurgers(req, res, next) {
    try {
      const burgers = await burgerService.getBurgers()
      logger.log(burgers)
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }


}