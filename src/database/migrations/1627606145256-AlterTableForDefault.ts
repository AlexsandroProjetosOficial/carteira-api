import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableForDefault1627606145256 implements MigrationInterface {
    name = 'AlterTableForDefault1627606145256'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `banks` CHANGE `status` `status` int NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `cities` CHANGE `status` `status` int NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `companies` CHANGE `status` `status` int NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `states` CHANGE `status` `status` int NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `addresses` CHANGE `status` `status` int NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `flags` CHANGE `status` `status` int NOT NULL DEFAULT '1'");
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `flags` CHANGE `status` `status` int NOT NULL");
        await queryRunner.query("ALTER TABLE `addresses` CHANGE `status` `status` int NOT NULL");
        await queryRunner.query("ALTER TABLE `states` CHANGE `status` `status` int NOT NULL");
        await queryRunner.query("ALTER TABLE `companies` CHANGE `status` `status` int NOT NULL");
        await queryRunner.query("ALTER TABLE `cities` CHANGE `status` `status` int NOT NULL");
        await queryRunner.query("ALTER TABLE `banks` CHANGE `status` `status` int NOT NULL");
    }

}
