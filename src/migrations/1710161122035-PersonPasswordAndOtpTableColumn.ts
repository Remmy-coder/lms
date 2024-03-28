import { MigrationInterface, QueryRunner } from 'typeorm';

export class PersonPasswordAndOtpTableColumn1710161122035
  implements MigrationInterface
{
  name = 'PersonPasswordAndOtpTableColumn1710161122035';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "person" ADD "password" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ADD "otpSecret" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ADD "otpToken" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" ADD "otpGeneratedAt" TIMESTAMP`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "person" DROP COLUMN "otpGeneratedAt"`,
    );
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "otpToken"`);
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "otpSecret"`);
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "password"`);
  }
}
