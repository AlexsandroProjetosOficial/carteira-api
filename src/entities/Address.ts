import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { City } from "./City";
import { Company } from "./Company";
import { State } from "./State";
import { User } from "./User";

@Entity('addresses')
class Address {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    street: string;

    @Column()
    zip_code: string;

    @Column()
    number: string;

    @Column()
    complement: string;

    @Column()
    district: string;

    @Column()
    country: string;

    @Column({default: 1})
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(type => User, address => Address, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true})
    @JoinColumn({ name: 'id_user' })
    user: User[];

    @ManyToOne(type => State, address => Address, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
    @JoinColumn({ name: 'id_state' })
    state: State[];

    @ManyToOne(type => City, address => Address, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
    @JoinColumn({ name: 'id_city'})
    city: City[];

    @ManyToOne(type => Company, address => Address, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
    @JoinColumn({ name: 'id_company'})
    company: Company[];

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Address };

