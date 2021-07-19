import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBankAccounts1625706151744 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'bankAccounts',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        isUnique: true
                    },
                    {
                        name: 'id_user',
                        type: 'varchar',
                    },
                    {
                        name: 'id_bank',
                        type: 'varchar'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'account_number',
                        type: 'varchar',
                        length: '15'
                    },
                    {
                        name: 'agency_number',
                        type: 'varchar',
                        length: '15'
                    },
                    {
                        name: 'account_limit',
                        type: 'float',
                    },
                    {
                        name: 'account_balance',
                        type: 'float'
                    },
                    {
                        name: 'expiration_day',
                        type: 'int',
                        length: '2',
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
                ],
                foreignKeys: [
                    {
                        name: 'FKIdUserBankAccounts',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_user'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKIdBankBankAccounts',
                        referencedTableName: 'banks',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_bank'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('bankAccounts');
    }

}
