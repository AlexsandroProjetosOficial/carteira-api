import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableIncludeForeignKeyFlagCreditCard1627602609740 implements MigrationInterface {
    name = 'AlterTableIncludeForeignKeyFlagCreditCard1627602609740'

    public async up(queryRunner: QueryRunner): Promise<void> {        
        await queryRunner.query("ALTER TABLE `creditCards` ADD `id_flag` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `creditCards` ADD CONSTRAINT `FK_472fd859a5b9eda8ad85ac0f493` FOREIGN KEY (`id_flag`) REFERENCES `flags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditCards` DROP FOREIGN KEY `FK_472fd859a5b9eda8ad85ac0f493`");
        await queryRunner.query("ALTER TABLE `creditCards` DROP COLUMN `id_flag`");
    }

}
