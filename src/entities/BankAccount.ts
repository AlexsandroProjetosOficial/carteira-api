import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Bank } from "./Bank";
import { GainExpense } from "./GainExpense";
import { User } from "./User";

@Entity('bankAccounts')
class BankAccount {

    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    name: string;

    @Column()
    account_number: string;

    @Column()
    agency_number: string;

    @Column()
    account_limit: number;

    @Column()
    account_balance: number;

    @Column()
    expiration_day: number;

    @Column({default: 1})
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(type => GainExpense, bankAccount => BankAccount, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    gainsExpenses: GainExpense;

    @ManyToOne(type => User, bankAccount => BankAccount, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
    @JoinColumn({ name: 'id_user' })
    user: User[]; 

    @ManyToOne(type => Bank, bankAccount => BankAccount, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
    @JoinColumn({ name: 'id_bank' })
    bank: Bank[]; 

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { BankAccount };
