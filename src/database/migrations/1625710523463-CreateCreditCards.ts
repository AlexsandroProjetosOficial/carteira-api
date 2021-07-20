import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCreditCards1625710523463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'creditCards',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        isUnique: true
                    },
                    {
                        name: 'id_user',
                        type: 'varchar'
                    },
                    {
                        name: 'id_flag',
                        type: 'varchar'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'number_card',
                        type: 'varchar',
                        length: '16'
                    },
                    {
                        name: 'security_code',
                        type: 'varchar',
                        length: '3'
                    },
                    {
                        name: 'member_since',
                        type: 'timestamp',
                    },
                    {
                        name: 'valid_thru',
                        type: 'timestamp'
                    },
                    {
                        name: 'aproximation',
                        type: 'boolean'
                    },
                    {
                        name: 'limit',
                        type: 'float'
                    },
                    {
                        name: 'expiration_day',
                        type: 'int',
                        length: '2'
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
                    columnNames: ['id_flag'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'flags',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                })
            ]
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('creditCards');
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
                    columnNames: ['id_flag'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'flags',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                })
            ]
        )
    }

}
