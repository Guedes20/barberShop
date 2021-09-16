import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterProviderFieldToProviderId1631288203106
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointment', 'provider');

    await queryRunner.addColumn(
      'appointment',
      new TableColumn({
        name: 'provider_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'appointment',
      new TableForeignKey({
        name: 'AppoitmentProvider',
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('appointment', 'AppoitmentProvider');

    await queryRunner.dropColumn('appointment', 'provider_id');

    await queryRunner.addColumn(
      'appointment',
      new TableColumn({
        name: 'provider',
        type: 'varchar',
      }),
    );
  }
}
