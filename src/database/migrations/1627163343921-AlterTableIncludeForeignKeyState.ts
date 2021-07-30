import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableIncludeForeignKeyState1627163343921 implements MigrationInterface {
    name = 'AlterTableIncludeForeignKeyState1627163343921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `addresses` ADD `id_state` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `addresses` ADD CONSTRAINT `FK_d64adf093c7fa6a3dcd9f35bad2` FOREIGN KEY (`id_state`) REFERENCES `states`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `addresses` DROP FOREIGN KEY `FK_d64adf093c7fa6a3dcd9f35bad2`");
        await queryRunner.query("ALTER TABLE `addresses` DROP COLUMN `id_state`");
    }

}
