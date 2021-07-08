import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Flag } from "./Flag";
import { User } from "./User";

@Entity('creditCards')
export class CreditCard {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    id_user: string;

    @JoinColumn({ name: 'id_user' })
    @ManyToOne(() => User)
    idUser: User;

    @Column()
    id_flag: string;

    @JoinColumn({ name: 'id_flag' })
    @ManyToOne(() => Flag)
    idFlag: Flag;
    
    @Column()
    name: string;

    @Column()
    number_card: number;

    @Column()
    security_code: number;

    @Column()
    member_since: number;

    @Column()
    valid_thru: Date;

    @Column()
    aproximation: Boolean;

    @Column()
    limit: number;

    @Column()
    expiration_day: number;
    
    @Column()
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}
