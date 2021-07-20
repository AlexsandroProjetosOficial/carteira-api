import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

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
                ]
            })
        );

        await queryRunner.createForeignKeys('bankAccounts',
            [
                new TableForeignKey({
                    columnNames: ['id_user'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'users',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                }),
                new TableForeignKey({
                    columnNames: ['id_bank'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'banks',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                })
            ]
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('bankAccounts');
        await queryRunner.dropForeignKeys('bankAccounts',
            [
                new TableForeignKey({
                    columnNames: ['id_user'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'users',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                }),
                new TableForeignKey({
                    columnNames: ['id_bank'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'banks',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                })
            ]
        )
    }

}
