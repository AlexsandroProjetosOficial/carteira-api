import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableIncludeForeignKeyCompany1627175585054 implements MigrationInterface {
    name = 'AlterTableIncludeForeignKeyCompany1627175585054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `addresses` ADD `id_company` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `addresses` ADD CONSTRAINT `FK_0260e56ef294d25ab5a741546ec` FOREIGN KEY (`id_company`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `addresses` DROP FOREIGN KEY `FK_0260e56ef294d25ab5a741546ec`");
        await queryRunner.query("ALTER TABLE `addresses` DROP COLUMN `id_company`");
    }

}
