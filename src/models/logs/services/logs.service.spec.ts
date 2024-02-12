import { Test, TestingModule } from '@nestjs/testing';

import { LogConfig } from './../log.config';
import { LogsService } from './logs.service';

describe(LogConfig.serviceDescribe, () => {
  let service: LogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogsService],
    }).compile();

    service = module.get<LogsService>(LogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
