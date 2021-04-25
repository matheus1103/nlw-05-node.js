import { Request, Response } from "express"
import { SettingService } from "../services/SettingsService";

class SettingsController{
    async create(request: Request, response: Response){
        const {chat, username} = request.body;

        const settingsService = new SettingService();

        try{
            const settings = await settingsService.create({chat, username});

            return response.json(settings);
        }catch(err){
            return response.status(400).json({message: err.message,})
        }
    }
    async update(request: Request, response: Response){
        const {username} = request.params
        const {chat} = request.body

        const settingsSevice = new SettingService()
        const settings = await settingsSevice.update(username,chat)

        return response.json(settings)
    }
    async findByUsername(request: Request, response: Response){
        const {username} = request.params
        const settingsSevice = new SettingService()
        const settings = await settingsSevice.findByUsername(username)

        return response.json(settings)
    }
}

export {SettingsController}