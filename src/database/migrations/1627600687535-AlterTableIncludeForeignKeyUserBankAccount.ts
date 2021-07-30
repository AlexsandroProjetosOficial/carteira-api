import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableIncludeForeignKeyUserBankAccount1627600687535 implements MigrationInterface {
    name = 'AlterTableIncludeForeignKeyUserBankAccount1627600687535'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bankAccounts` ADD `id_user` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `bankAccounts` ADD CONSTRAINT `FK_29f11a3c73a4b957a665cc2ff9c` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bankAccounts` DROP FOREIGN KEY `FK_29f11a3c73a4b957a665cc2ff9c`");
        await queryRunner.query("ALTER TABLE `bankAccounts` DROP COLUMN `id_user`");
    }

}
