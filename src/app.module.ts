import { Module } from '@nestjs/common';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest-test',
      synchronize: false,
      entities: [__dirname + '/../**/*.entity.js'], 
      dropSchema: false
    }),
    LeaderboardModule
  ],
})
export class AppModule {}