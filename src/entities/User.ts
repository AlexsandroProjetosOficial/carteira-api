import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Exclude } from "class-transformer";
import { Address } from "./Address";
import { GainExpense } from "./GainExpense";
import { BankAccount } from "./BankAccount";
import { CreditCard } from "./CreditCard";

@Entity('users')
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Exclude()
    @Column()
    password: string;

    @Column({nullable: true})
    cpf: string;

    @Column({nullable: true})
    phone: string;

    @Column({nullable: true})
    phone_cell: string;

    @Column({nullable: true})
    avatar: string;

    @Column({nullable: true})
    nick_name: string;

    @Column({nullable: true})
    birthday: Date;

    @Column({default: 1})
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(type => Address, user => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    address: Address;

    @OneToMany(type => GainExpense, user => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    gainsExpenses: GainExpense;

    @OneToMany(type => BankAccount, user => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    bankAccount: BankAccount;

    @OneToMany(type => CreditCard, user => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    creditCard: CreditCard;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };
