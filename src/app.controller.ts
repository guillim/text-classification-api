import { BodyDto } from './body-keyword.dto';
import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async predict(@Body() bodyDto: BodyDto, @Query() query): Promise<any[]> {
    if (query.apikey !== process.env.apikey) {
      return [
        'Sorry, you are not authorised. Please ask for the correct apikey',
      ];
    }

    const result = await this.appService.predictKeyword(
      process.env.projectId,
      process.env.location,
      process.env.modelId,
      bodyDto.keyword,
    );
    return [{ result }];
  }
}
