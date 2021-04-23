import {Request, Response} from 'express'
import {MessagesService} from "../services/MessageServices"

class MessagesController{
    async create(request: Request, response:Response){
        const {admin_id, text, user_id} = request.body
        const messagesServices = new MessagesService()

        const message = await messagesServices.create({
            admin_id,
            text,
            user_id
        })
        return response.json(message)
    }
    async showByUsers(request: Request, response: Response){
        
        const { id } = request.params
        
        const messagesServices = new MessagesService()
        
        const list = await messagesServices.listByUsers(id)

        return response.json(list)
    }
}

export {MessagesController}