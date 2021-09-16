import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterColumIDTypeUUID1631293590852 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "appointment" ALTER COLUMN "id" TYPE "uuid" USING (uuid_generate_v4())

    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "appointment" ALTER COLUMN "id" TYPE "varchar"
`);
  }
}
