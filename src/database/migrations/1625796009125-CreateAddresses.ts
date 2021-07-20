import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateAddresses1625796009125 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'addresses',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        isUnique: true
                    },
                    {
                        name: 'id_state',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'id_city',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'id_user',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'id_company',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'street',
                        type: 'varchar'
                    },
                    {
                        name: 'zip_code',
                        type: 'varchar',
                        length: '8'
                    },
                    {
                        name: 'number',
                        type: 'varchar'
                    },
                    {
                        name: 'complement',
                        type: 'varchar'
                    },
                    {
                        name: 'district',
                        type: 'varchar'
                    },
                    {
                        name: 'country',
                        type: 'varchar',
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

        await queryRunner.createForeignKeys('addresses',
            [
                new TableForeignKey({
                    columnNames: ['id_state'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'states',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                }),
                new TableForeignKey({
                    columnNames: ['id_city'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'cities',
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
                    columnNames: ['id_company'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'companies',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                })
            ]
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('addresses');
        await queryRunner.dropForeignKeys('addresses',
            [
                new TableForeignKey({
                    columnNames: ['id_state'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'states',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                }),
                new TableForeignKey({
                    columnNames: ['id_city'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'cities',
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
                    columnNames: ['id_company'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'companies',
                    onDelete: 'CASCATE',
                    onUpdate: 'CASCATE'
                })
            ]
        )
    }

}
