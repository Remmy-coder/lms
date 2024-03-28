import { MigrationInterface, QueryRunner } from "typeorm";

export class NewEntitesAndConstraintsAddedToPersonTable1710764009528 implements MigrationInterface {
    name = 'NewEntitesAndConstraintsAddedToPersonTable1710764009528'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "UQ_d2d717efd90709ebd3cb26b936c" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "UQ_7dff004340c1cc2dc16e7500659" UNIQUE ("taxIdentifier")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "UQ_7dff004340c1cc2dc16e7500659"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "UQ_d2d717efd90709ebd3cb26b936c"`);
    }

}
