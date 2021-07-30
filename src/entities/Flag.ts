import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { CreditCard } from "./CreditCard";

@Entity('flags')
class Flag {

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

    @OneToMany(type => CreditCard, flag => Flag, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    creditCard: CreditCard;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Flag };
