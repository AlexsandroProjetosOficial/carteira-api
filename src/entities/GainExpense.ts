import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { AccountType } from "./AccountType";
import { BankAccount } from "./BankAccount";
import { Company } from "./Company";
import { User } from "./User";

export type GainsExpensesType = 'entry' | 'exit';
export type GainsExpensesFrequency = 'recurring' | 'occasional';
export type GainsExpensesPaid = 'Sim' | 'Não';
export type GainsExpensesReceipt = 'Sim' | 'Não';

@Entity('gainsExpenses')
class GainExpense {

    @PrimaryColumn()
    readonly id: string;

    @Column({
        type: 'enum',
        enum: ['entry', 'exit']
    })
    type: GainsExpensesType;

    @Column({
        type: 'enum',
        enum: ['recurring', 'occasional']
    })
    frequency: GainsExpensesFrequency;

    @Column()
    description: string;

    @Column()
    amount: number;

    @Column()
    issue_date: Date;

    @Column()
    expiration: Date;

    @Column()
    paid_date: Date;

    @Column({
        type: 'enum',
        enum: ['Sim', 'Não']
    })
    paid: GainsExpensesPaid;

    @Column()
    receipt_date: Date;

    @Column({
        type: 'enum',
        enum: ['Sim', 'Não']
    })
    receipt: GainsExpensesReceipt;

    @Column({default: 1})
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(type => Company, gainsExpenses => GainExpense, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
    @JoinColumn({ name: 'id_company'})
    company: Company[];

    @ManyToOne(type => User, gainsExpenses => GainExpense, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
    @JoinColumn({ name: 'id_user'})
    user: User[];

    @ManyToOne(type => AccountType, GainExpense => GainExpense, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
    @JoinColumn({ name: 'id_account_type' })
    accountType: AccountType[]; 

    @ManyToOne(type => BankAccount, GainExpense => GainExpense, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
    @JoinColumn({ name: 'id_bank_account' })
    bankAccount: BankAccount[]; 

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { GainExpense };
