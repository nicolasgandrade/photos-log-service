import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LogConfig } from './logs/log.config';
import { LogsController } from './logs/controllers/log.controller';
import { LogsService } from './logs/services/log.service';
import { LogRepository } from './logs/log.repository';
import { LogSchema } from './logs/schemas/log.schema';
import { DatabaseConfig } from './common/database/database.config';
import { MachineConfig } from './machines/machine.config';
import { MachineSchema } from './machines/schemas/machine.schema';
import { MachinesController } from './machines/controllers/machine.controller';
import { MachinesService } from './machines/services/machine.service';
import { MachineRepository } from './machines/machine.repository';
import { EstablishmentConfig } from './establishments/establishment.config';
import { EstablishmentSchema } from './establishments/schemas/establishment.schema';
import { EstablishmentsController } from './establishments/controllers/establishment.controller';
import { EstablishmentsService } from './establishments/services/establishment.service';
import { EstablishmentRepository } from './establishments/establishment.repository';

@Module({
  imports: [
    MongooseModule.forRoot(DatabaseConfig.mongoConnectionURL),

    MongooseModule.forFeature([
      { name: LogConfig.modelSchemaDefinition, schema: LogSchema },
      { name: MachineConfig.modelSchemaDefinition, schema: MachineSchema },
      { name: EstablishmentConfig.modelSchemaDefinition, schema: EstablishmentSchema },
    ]),
  ],
  controllers: [LogsController, MachinesController, EstablishmentsController],
  providers: [
    LogsService,
    LogRepository,
    MachinesService,
    MachineRepository,
    EstablishmentsService,
    EstablishmentRepository,
  ],
})
export class AppModule {}
