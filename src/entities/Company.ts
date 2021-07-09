import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('companies')
class Company {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    cnpj: number;
    
    @Column()
    corporate_name: string;

    @Column()
    trade_name: string;

    @Column()
    state_registration: number;

    @Column()
    municipal_inscription: number;

    @Column()
    phone: number;

    @Column()
    owner: string;

    @Column()
    phone_cell_owner: number;

    @Column()
    email: string;

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

export { Company };
