import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

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

    @Column()
    password: string;

    @Column()
    cpf: number;

    @Column()
    phone: number;

    @Column()
    phone_cell: number;

    @Column()
    avatar: string;

    @Column()
    nick_name: string;

    @Column()
    birthday: Date;

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

export { User };
