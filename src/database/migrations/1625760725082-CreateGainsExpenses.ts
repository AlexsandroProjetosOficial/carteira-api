import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateGainsExpenses1625760725082 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'gainsExpenses',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        isUnique: true
                    },
                    {
                        name: 'id_company',
                        type: 'varchar'
                    },
                    {
                        name: 'id_bank_account',
                        type: 'varchar'
                    },
                    {
                        name: 'id_user',
                        type: 'varchar'
                    },
                    {
                        name: 'id_account_type',
                        type: 'varchar'
                    },
                    {
                        name: 'type',
                        type: 'varchar'
                    },
                    {
                        name: 'frequency',
                        type: 'varchar'
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    },
                    {
                        name: 'amount',
                        type: 'float'
                    },
                    {
                        name: 'issue_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'expiration_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'paid_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'paid',
                        type: 'varchar'
                    },
                    {
                        name: 'receipt_date',
                        type: 'timestamp'
                    },
                    {
                        name: 'receipt',
                        type: 'varchar'
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

        await queryRunner.createForeignKeys('gainsExpenses',
            [
                new TableForeignKey({
                    columnNames: ['id_company'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'companies',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                }),
                new TableForeignKey({
                    columnNames: ['id_bank_account'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'bankAccounts',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                }),
                new TableForeignKey({
                    columnNames: ['id_user'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'users',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                }),
                new TableForeignKey({
                    columnNames: ['id_account_type'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'accountsType',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                })
            ]
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('gainsExpenses');
        await queryRunner.dropForeignKeys('gainsExpenses',
            [
                new TableForeignKey({
                    columnNames: ['id_company'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'companies',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                }),
                new TableForeignKey({
                    columnNames: ['id_bank_account'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'bankAccounts',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                }),
                new TableForeignKey({
                    columnNames: ['id_user'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'users',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                }),
                new TableForeignKey({
                    columnNames: ['id_account_type'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'accountsType',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                })
            ]
        )
    }

}
