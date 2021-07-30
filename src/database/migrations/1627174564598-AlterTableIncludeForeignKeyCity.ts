import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableIncludeForeignKeyCity1627174564598 implements MigrationInterface {
    name = 'AlterTableIncludeForeignKeyCity1627174564598'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `addresses` ADD `id_city` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `addresses` ADD CONSTRAINT `FK_b037185d4f4493b58e341e26b6e` FOREIGN KEY (`id_city`) REFERENCES `cities`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `addresses` DROP FOREIGN KEY `FK_b037185d4f4493b58e341e26b6e`");
        await queryRunner.query("ALTER TABLE `addresses` DROP COLUMN `id_city`");
    }

}
