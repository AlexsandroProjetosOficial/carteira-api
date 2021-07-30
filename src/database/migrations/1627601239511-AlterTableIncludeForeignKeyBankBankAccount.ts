import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableIncludeForeignKeyBankBankAccount1627601239511 implements MigrationInterface {
    name = 'AlterTableIncludeForeignKeyBankBankAccount1627601239511'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bankAccounts` ADD `id_bank` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `bankAccounts` ADD CONSTRAINT `FK_f779e513a68713c20dfb1d1d438` FOREIGN KEY (`id_bank`) REFERENCES `banks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bankAccounts` DROP FOREIGN KEY `FK_f779e513a68713c20dfb1d1d438`");
        await queryRunner.query("ALTER TABLE `bankAccounts` DROP COLUMN `id_bank`");
    }

}
