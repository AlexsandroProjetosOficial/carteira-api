import { MigrationInterface, QueryRunner, Table } from "typeorm";

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
                        type: 'varchar'
                    },
                    {
                        name: 'id_city',
                        type: 'varchar'
                    },
                    {
                        name: 'id_user',
                        type: 'varchar'
                    },
                    {
                        name: 'id_company',
                        type: 'varchar'
                    },
                    {
                        name: 'street',
                        type: 'varchar'
                    },
                    {
                        name: 'zip_code',
                        type: 'int',
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
                ],
                foreignKeys: [
                    {
                        name: 'FKIdStateAddresses',
                        referencedTableName: 'states',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_state'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKIdCityAddresses',
                        referencedTableName: 'cities',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_city'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKIdUserAddresses',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_user'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKIdCompanyAddresses',
                        referencedTableName: 'companies',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_company'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('addresses')
    }

}
