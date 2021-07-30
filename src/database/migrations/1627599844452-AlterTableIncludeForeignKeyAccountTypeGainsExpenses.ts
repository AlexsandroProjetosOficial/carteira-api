import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableIncludeForeignKeyAccountTypeGainsExpenses1627599844452 implements MigrationInterface {
    name = 'AlterTableIncludeForeignKeyAccountTypeGainsExpenses1627599844452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `gainsExpenses` ADD `id_account_type` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `gainsExpenses` ADD CONSTRAINT `FK_605a6355049ae4d76e517f81e32` FOREIGN KEY (`id_account_type`) REFERENCES `accountsType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `gainsExpenses` DROP FOREIGN KEY `FK_605a6355049ae4d76e517f81e32`");
        await queryRunner.query("ALTER TABLE `gainsExpenses` DROP COLUMN `id_account_type`");
    }

}
