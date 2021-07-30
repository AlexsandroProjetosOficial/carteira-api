import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { GainExpense } from "./GainExpense";

@Entity('accountsType')
class AccountType {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column({default: 1})
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(type => GainExpense, accountType => AccountType, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    gainsExpenses: GainExpense;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { AccountType };
