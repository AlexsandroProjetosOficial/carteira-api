import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Flag } from "./Flag";
import { User } from "./User";

@Entity('creditCards')
class CreditCard {

    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    name: string;

    @Column()
    number_card: string;

    @Column()
    security_code: string;

    @Column()
    member_since: Date;

    @Column()
    valid_thru: Date;

    @Column()
    aproximation: Boolean;

    @Column()
    limit: number;

    @Column()
    expiration_day: number;
    
    @Column({default: 1})
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(type => User, creditCard => CreditCard, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true})
    @JoinColumn({ name: 'id_user' })
    user: User[];

    @ManyToOne(type => Flag, creditCard => CreditCard, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true})
    @JoinColumn({ name: 'id_flag' })
    flag: Flag[];


    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { CreditCard };
