import { MigrationInterface, QueryRunner, Table } from "typeorm";

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
                        name: 'FKIdCompanyGainsExpensess',
                        referencedTableName: 'companies',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_company'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKIdBankAccountGainsExpensess',
                        referencedTableName: 'bankAccounts',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_bank_account'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKIdUserGainsExpensess',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_user'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKIdAccountTypeGainsExpensess',
                        referencedTableName: 'accountsType',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_account_type'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('gainsExpenses');
    }

}
