import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

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
