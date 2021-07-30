import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableIncludeForeignKeyUserGainsExpenses1627598924498 implements MigrationInterface {
    name = 'AlterTableIncludeForeignKeyUserGainsExpenses1627598924498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `gainsExpenses` ADD `id_user` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `gainsExpenses` ADD CONSTRAINT `FK_35f38fd1a7617b2900f50b62ab2` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `gainsExpenses` DROP FOREIGN KEY `FK_35f38fd1a7617b2900f50b62ab2`");
        await queryRunner.query("ALTER TABLE `gainsExpenses` DROP COLUMN `id_user`");
    }

}
