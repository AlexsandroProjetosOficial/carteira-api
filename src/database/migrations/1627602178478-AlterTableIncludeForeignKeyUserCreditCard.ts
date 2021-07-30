import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableIncludeForeignKeyUserCreditCard1627602178478 implements MigrationInterface {
    name = 'AlterTableIncludeForeignKeyUserCreditCard1627602178478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditCards` ADD `id_user` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `creditCards` ADD CONSTRAINT `FK_fee2658b3dd5301e53353a9e87b` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditCards` DROP FOREIGN KEY `FK_fee2658b3dd5301e53353a9e87b`");
        await queryRunner.query("ALTER TABLE `creditCards` DROP COLUMN `id_user`");
    }

}
