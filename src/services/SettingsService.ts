import { getCustomRepository, Repository } from "typeorm";
import { Settings } from "../entities/settings";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate{
    chat: boolean;
    username: string;
}

class SettingService{
    private settingsRepository: Repository<Settings>

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository)
    }    
    
    async create({chat, username}: ISettingsCreate){

        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        })
        if(userAlreadyExists){
            throw new Error("user already exists")
        }
        const settings = this.settingsRepository.create({
            chat,
            username
        })
        await this.settingsRepository.save(settings)

        return settings
    }
}

export {SettingService}