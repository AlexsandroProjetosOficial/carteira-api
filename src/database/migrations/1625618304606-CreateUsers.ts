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
                        type: 'varchar',
                        length: '11',
                        isNullable: true
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'phone_cell',
                        type: 'varchar',
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
                        name: 'updated_at',
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
