import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Leaderboard } from './leaderboard.entity/leaderboard.entity';


@Injectable()
export class LeaderboardService {

    constructor(@InjectRepository(Leaderboard) private usersRepository: Repository<Leaderboard>) { }

    async getUsers(): Promise<Leaderboard[]> {
        return await this.usersRepository.find();
    }

    async getLeaderboard() {
        return await this.usersRepository.find({
            select: ["high_score", "lead_name"],
            order: {
                "high_score": 'desc',
              }            
        });
    }

    saveLeaderboard(leaderboard: Leaderboard) {
        this.usersRepository.save(leaderboard)
    }
        
    updateUser(user: Leaderboard) {
        this.usersRepository.save(user)
    }

    deleteUser(user: Leaderboard) {
        this.usersRepository.delete(user);
    }
}