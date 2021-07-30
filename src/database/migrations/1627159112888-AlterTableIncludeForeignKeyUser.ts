import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableIncludeForeignKeyUser1627159112888 implements MigrationInterface {
    name = 'AlterTableIncludeForeignKey1627159112888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `addresses` ADD `id_user` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `addresses` ADD CONSTRAINT `FK_4874db84058c818ceda00f8b0c7` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `addresses` DROP FOREIGN KEY `FK_4874db84058c818ceda00f8b0c7`");
        await queryRunner.query("ALTER TABLE `addresses` DROP COLUMN `id_user`");
    }

}
