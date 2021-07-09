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
    id_state: string;

    @JoinColumn({ name: 'id_state' })
    @ManyToOne(() => State)
    idState: State;

    @Column()
    id_city: string;

    @JoinColumn({ name: 'id_city' })
    @ManyToOne(() => City)
    idCity: City;

    @Column()
    id_user: string;

    @JoinColumn({ name: 'id_user' })
    @ManyToOne(() => User)
    idUser: User;

    @Column()
    id_company: string;

    @JoinColumn({ name: 'id_company' })
    @ManyToOne(() => Company)
    idCompany: Company;

    @Column()
    street: string;

    @Column()
    zip_code: number;

    @Column()
    number: string;

    @Column()
    complement: string;

    @Column()
    district: string;

    @Column()
    country: string;

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

export { Address };

