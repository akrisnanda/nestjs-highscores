import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { Leaderboard } from './leaderboard.entity/leaderboard.entity';

@Controller('leaderboard')
export class LeaderboardController {

    constructor(private service: LeaderboardService) { }

    @Get('')
    get() {
        return this.service.getLeaderboard();
    }

    @Post()
    create(@Body() leaderboard: Leaderboard) {
        return this.service.saveLeaderboard(leaderboard);
    }    

}