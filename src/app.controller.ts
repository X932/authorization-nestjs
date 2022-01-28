import { AppService } from './app.service';
import {
  Controller,
  Get,
  ParseIntPipe,
  Query,
  DefaultValuePipe,
} from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('base')
  getHello(@Query('id', new DefaultValuePipe(-1), ParseIntPipe) id: number): {
    message: string;
  } {
    return { message: String(id) };
  }
}
