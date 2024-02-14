import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';

import { Machine } from '../../machines/interfaces/machine.interface';
import { MachinesService } from '../services/machines.service';
import { MachineDTO } from '../dto/machines.dto';
import { MachineConfig } from '../machine.config';

@Controller(MachineConfig.controllerDefinition)
export class MachinesController {
  constructor(private readonly machinesService: MachinesService) {}

  @Post()
  async saveMachine(@Body() newMachine: MachineDTO): Promise<Machine> {
    return await this.machinesService.saveMachine(newMachine);
  }

  @Get()
  async getAllMachines(): Promise<Machine[]> {
    return await this.machinesService.getAllMachines();
  }

  @Get('id/:machineID')
  async getMachineById(@Param('machineID') machineName: Machine): Promise<Machine> {
    return await this.machinesService.getMachineById(machineName);
  }

  @Get('name/:machineName')
  async getMachineByName(@Param('machineName') machineName: string): Promise<Machine> {
    return await this.machinesService.getMachineByName(machineName);
  }

  @Get('establishment/:establishment')
  async getMachinesByEstablishment(
    @Param('establishment') establishment: string,
  ): Promise<Machine[]> {
    return await this.machinesService.getMachinesByEstablishment(establishment);
  }

  @Patch('name/:machineName')
  async updateMachineByName(
    @Param('machineName') machineName: string,
    @Body() newMachine: MachineDTO,
  ): Promise<Machine> {
    return await this.machinesService.updateMachineByName(machineName, newMachine);
  }

  @Delete('name/:machineName')
  async deleteMachineByName(@Param('machineName') machineName: string): Promise<Machine> {
    return await this.machinesService.deleteMachineByName(machineName);
  }
}
