import { MigrationInterface, QueryRunner, Table } from "typeorm";

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
                ],
                foreignKeys: [
                    {
                        name: 'FKIdUserCreditCards',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_user'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKIdFlagCreditCards',
                        referencedTableName: 'flags',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_flag'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('creditCards');
    }

}
