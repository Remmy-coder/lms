import { MigrationInterface, QueryRunner } from 'typeorm';

export class PersonTableInitialState1710158536981
  implements MigrationInterface
{
  name = 'PersonTableInitialState1710158536981';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "person" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "lastname" character varying NOT NULL, "firstname" character varying NOT NULL, "dateOfBirth" TIMESTAMP NOT NULL, "email" character varying NOT NULL, "dialcode" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "address" character varying NOT NULL, "taxIdentifier" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "person"`);
  }
}
