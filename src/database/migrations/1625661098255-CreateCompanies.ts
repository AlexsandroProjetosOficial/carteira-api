import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompanies1625661098255 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'companies',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        isUnique: true
                    },
                    {
                        name: 'cnpj',
                        type: 'int',
                        length: '14'
                    },
                    {
                        name: 'corporate_name',
                        type: 'varchar'
                    },
                    {
                        name: 'trade_name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'state_registration',
                        type: 'int',
                        length: '50',
                        isNullable: true
                    },
                    {
                        name: 'municipal_inscription',
                        type: 'int',
                        length: '50',
                        isNullable: true
                    },
                    {
                        name: 'phone',
                        type: 'int',
                        length: '13',
                        isNullable: true
                    },
                    {
                        name: 'owner',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'phone_cell_owner',
                        type: 'int',
                        length: '14',
                        isNullable: true
                    },
                    {
                        name: 'email',
                        type: 'varchar',
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
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('companies');
    }

}
