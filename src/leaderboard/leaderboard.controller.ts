import { Controller, Post, Body, Get, Put, Delete,Param, UseGuards} from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { Leaderboard } from './leaderboard.entity/leaderboard.entity';
import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth/auth.service';

// @Controller('auth')
@Controller('leaderboard')
export class LeaderboardController {

    constructor(private service: LeaderboardService) { }

    @UseGuards(AuthGuard)
    @Get('')
    get() {
        return this.service.getLeaderboard();
    }

    @UseGuards(AuthGuard)
    @Post()
    create(@Body() leaderboard: Leaderboard) {
        return this.service.saveLeaderboard(leaderboard);
    }    

}