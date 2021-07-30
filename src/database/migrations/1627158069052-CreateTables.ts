import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1627158069052 implements MigrationInterface {
    name = 'CreateTables1627158069052'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `accountsType` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `status` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `addresses` (`id` varchar(255) NOT NULL, `street` varchar(255) NOT NULL, `zip_code` varchar(255) NOT NULL, `number` varchar(255) NOT NULL, `complement` varchar(255) NOT NULL, `district` varchar(255) NOT NULL, `country` varchar(255) NOT NULL, `status` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `banks` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `code` varchar(255) NOT NULL, `status` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `bankAccounts` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `account_number` varchar(255) NOT NULL, `agency_number` varchar(255) NOT NULL, `account_limit` int NOT NULL, `account_balance` int NOT NULL, `expiration_day` int NOT NULL, `status` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `cities` (`id` varchar(255) NOT NULL, `id_ibge` int NOT NULL, `id_state_ibge` int NOT NULL, `name` varchar(255) NOT NULL, `status` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `companies` (`id` varchar(255) NOT NULL, `cnpj` varchar(255) NOT NULL, `corporate_name` varchar(255) NOT NULL, `trade_name` varchar(255) NOT NULL, `state_registration` varchar(255) NOT NULL, `municipal_inscription` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `owner` varchar(255) NOT NULL, `phone_cell_owner` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `status` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `creditCards` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `number_card` varchar(255) NOT NULL, `security_code` varchar(255) NOT NULL, `member_since` datetime NOT NULL, `valid_thru` datetime NOT NULL, `aproximation` tinyint NOT NULL, `limit` int NOT NULL, `expiration_day` int NOT NULL, `status` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `flags` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `status` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `gainsExpenses` (`id` varchar(255) NOT NULL, `type` enum ('entry', 'exit') NOT NULL, `frequency` enum ('recurring', 'occasional') NOT NULL, `description` varchar(255) NOT NULL, `amount` int NOT NULL, `issue_date` datetime NOT NULL, `expiration` datetime NOT NULL, `paid_date` datetime NOT NULL, `paid` enum ('Sim', 'Não') NOT NULL, `receipt_date` datetime NOT NULL, `receipt` enum ('Sim', 'Não') NOT NULL, `status` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `states` (`id` varchar(255) NOT NULL, `id_ibge` int NOT NULL, `name` varchar(255) NOT NULL, `abbreviation` varchar(255) NOT NULL, `status` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(255) NOT NULL, `first_name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `cpf` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `phone_cell` varchar(255) NOT NULL, `avatar` varchar(255) NOT NULL, `nick_name` varchar(255) NOT NULL, `birthday` datetime NOT NULL, `status` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `states`");
        await queryRunner.query("DROP TABLE `gainsExpenses`");
        await queryRunner.query("DROP TABLE `flags`");
        await queryRunner.query("DROP TABLE `creditCards`");
        await queryRunner.query("DROP TABLE `companies`");
        await queryRunner.query("DROP TABLE `cities`");
        await queryRunner.query("DROP TABLE `bankAccounts`");
        await queryRunner.query("DROP TABLE `banks`");
        await queryRunner.query("DROP TABLE `addresses`");
        await queryRunner.query("DROP TABLE `accountsType`");
    }

}
