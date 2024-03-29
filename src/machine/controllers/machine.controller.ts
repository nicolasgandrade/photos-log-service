import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';

import { Machine } from '../interfaces/machine.interface';
import { Establishment } from '../../establishment/interfaces/establishment.interface';
import { MachineService } from '../services/machine.service';
import { MachineDTO } from '../dto/machine.dto';
import { MachineConfig } from '../machine.config';

@Controller(MachineConfig.controllerDefinition)
export class MachineController {
  constructor(private readonly machinesService: MachineService) {}

  @Post()
  async saveMachine(@Body() newMachine: MachineDTO): Promise<Machine> {
    return await this.machinesService.saveMachine(newMachine);
  }

  @Get()
  async getAllMachines(): Promise<Machine[]> {
    return await this.machinesService.getAllMachines();
  }

  @Get('id/:machineId')
  async getMachineById(@Param('machineId') machineId: Machine): Promise<Machine> {
    return await this.machinesService.getMachineById(machineId);
  }

  @Get('name/:machineName')
  async getMachineByName(@Param('machineName') machineName: string): Promise<Machine> {
    return await this.machinesService.getMachineByName(machineName);
  }

  @Get('establishment/:establishment')
  async getMachinesByEstablishment(
    @Param('establishment') establishment: Establishment,
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
