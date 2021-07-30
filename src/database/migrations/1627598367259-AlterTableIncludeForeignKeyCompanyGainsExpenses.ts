import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableIncludeForeignKeyCompanyGainsExpenses1627598367259 implements MigrationInterface {
    name = 'AlterTableIncludeForeignKeyCompanyGainsExpenses1627598367259'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `gainsExpenses` ADD `id_company` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `gainsExpenses` ADD CONSTRAINT `FK_8dc8a37adee9d91361071aef238` FOREIGN KEY (`id_company`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `gainsExpenses` DROP FOREIGN KEY `FK_8dc8a37adee9d91361071aef238`");
        await queryRunner.query("ALTER TABLE `gainsExpenses` DROP COLUMN `id_company`");
    }

}
