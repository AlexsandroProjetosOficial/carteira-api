import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Bank } from "./Bank";
import { User } from "./User";

@Entity('bankAccounts')
export class BankAccount {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    id_user: string;

    @JoinColumn({ name: 'id_user' })
    @ManyToOne(() => User)
    idUser: User;

    @Column()
    id_bank: string;

    @JoinColumn({ name: 'id_bank' })
    @ManyToOne(() => Bank)
    idBank: Bank;
    
    @Column()
    name: string;

    @Column()
    account_number: number;

    @Column()
    agency_number: number;

    @Column()
    account_limit: number;

    @Column()
    account_balance: number;

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
