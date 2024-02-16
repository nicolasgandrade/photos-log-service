import { Test, TestingModule } from '@nestjs/testing';

import { LogConfig } from '../log.config';
import { LogsController } from './log.controller';

describe(LogConfig.controllerDescribe, () => {
  let controller: LogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogsController],
    }).compile();

    controller = module.get<LogsController>(LogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});