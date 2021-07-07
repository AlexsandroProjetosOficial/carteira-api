import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1625618304606 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        isUnique: true
                    },
                    {
                        name: 'first_name',
                        type: 'varchar'
                    },
                    {
                        name: 'last_name',
                        type: 'varchar'
                    },
                    {
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'cpf',
                        type: 'int',
                        length: '11',
                        isNullable: true
                    },
                    {
                        name: 'phone',
                        type: 'int',
                        length: '13',
                        isNullable: true
                    },
                    {
                        name: 'phone_cell',
                        type: 'int',
                        length: '14',
                        isNullable: true
                    },
                    {
                        name: 'avatar',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'nick_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'birthday',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'status',
                        type: 'int',
                        length: '1',
                        default: 1
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
