export class LeaderboardEntity {}
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Leaderboard {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    high_score: number;

    @Column({ length: 50 })
    lead_name:string;

}