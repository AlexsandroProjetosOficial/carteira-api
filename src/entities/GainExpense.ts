import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { AccountType } from "./AccountType";
import { BankAccount } from "./BankAccount";
import { Company } from "./Company";
import { User } from "./User";

export type GainsExpensesType = 'entry' | 'exit';
export type GainsExpensesFrequency = 'recurring' | 'probable';

@Entity('gainsExpenses')
export class GainExpense {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    id_company: string;

    @JoinColumn({ name: 'id_company' })
    @ManyToOne(() => Company)
    idCompany: Company;

    @Column()
    id_bank_account: string;

    @JoinColumn({ name: 'id_bank_account' })
    @ManyToOne(() => BankAccount)
    idBankAccount: BankAccount;

    @Column()
    id_user: string;

    @JoinColumn({ name: 'id_user' })
    @ManyToOne(() => User)
    idUser: User;

    @Column()
    id_account_type: string;

    @JoinColumn({ name: 'id_account_type' })
    @ManyToOne(() => AccountType)
    idAccountType: AccountType;

    @Column({
        type: 'enum',
        enum: ['entry', 'exit']
    })
    type: GainsExpensesType;

    @Column({
        type: 'enum',
        enum: ['recurring', 'probable']
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
