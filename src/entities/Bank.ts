import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { BankAccount } from "./BankAccount";

@Entity('banks')
class Bank {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column({default: 1})
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(type => BankAccount, bank => Bank, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    bankAccount: BankAccount;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Bank };
