import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableUserForNullable1627605395456 implements MigrationInterface {
    name = 'AlterTableUserForNullable1627605395456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` CHANGE `cpf` `cpf` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `phone` `phone` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `phone_cell` `phone_cell` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `avatar` `avatar` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `nick_name` `nick_name` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `birthday` `birthday` datetime NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` CHANGE `birthday` `birthday` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `nick_name` `nick_name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `avatar` `avatar` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `phone_cell` `phone_cell` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `phone` `phone` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `cpf` `cpf` varchar(255) NOT NULL");
    }

}
