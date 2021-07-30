import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Address } from "./Address";
import { GainExpense } from "./GainExpense";

@Entity('companies')
class Company {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    cnpj: string;
    
    @Column()
    corporate_name: string;

    @Column()
    trade_name: string;

    @Column()
    state_registration: string;

    @Column()
    municipal_inscription: string;

    @Column()
    phone: string;

    @Column()
    owner: string;

    @Column()
    phone_cell_owner: string;

    @Column()
    email: string;

    @Column({default: 1})
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(type => Address, company => Company, { onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    address: Address;

    @OneToMany(type => GainExpense, company => Company, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    gainsExpenses: GainExpense;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Company };
