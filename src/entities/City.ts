import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Address } from "./Address";

@Entity('cities')
class City {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    id_ibge: number;

    @Column()
    id_state_ibge: number;

    @Column()
    name: string;

    @Column({default: 1})
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(type => Address, city => City, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    address: Address;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { City };
