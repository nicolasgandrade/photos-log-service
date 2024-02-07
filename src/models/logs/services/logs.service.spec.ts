import { Test, TestingModule } from '@nestjs/testing';

import { LogConfig } from './../log.config';
import { logsService } from './logs.service';

describe(LogConfig.serviceDescribe, () => {
  let service: logsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [logsService],
    }).compile();

    service = module.get<logsService>(logsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
