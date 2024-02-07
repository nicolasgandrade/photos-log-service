import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';

import { Log } from 'src/models/logs/interfaces/log.interface';
import { logsService } from '../services/logs.service';
import { LogDTO } from '../dto/logs.dto';
import { LogConfig } from '../log.config';

@Controller(LogConfig.controllerDefinition)
export class LogsController {
  constructor(private readonly logsService: logsService) {}

  @Get()
  async getAllLogs(): Promise<Log[]> {
    return await this.logsService.getAllLogs();
  }

  @Get('id/:logID')
  async getLogById(@Param('logID') logID: string): Promise<Log> {
    return await this.logsService.getLogById(logID);
  }

  @Get('machine/:machineName')
  async getLogByMachineName(@Param('machineName') machineName: string): Promise<Log[]> {
    return await this.logsService.getLogByMachineName(machineName);
  }

  @Get('name/:logName')
  async getLogByName(@Param('logName') logName: string): Promise<Log[]> {
    return await this.logsService.getLogByName(logName);
  }

  @Post()
  async saveLog(@Body() newLog: LogDTO): Promise<Log> {
    return await this.logsService.saveLog(newLog);
  }

  @Patch(':logID')
  async updateLogById(@Param('logID') logID: string, @Body() newLog: LogDTO): Promise<Log> {
    return await this.logsService.updateLogById(logID, newLog);
  }

  @Delete(':logID')
  async deletelogById(@Param('logID') logID: string): Promise<Log> {
    return await this.logsService.deletelogById(logID);
  }
}