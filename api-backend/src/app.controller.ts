import {Controller, Get} from '@nestjs/common'
import {HttpService} from "@nestjs/common"
import {AppService} from './app.service'
import {Observable} from "rxjs"
import {map} from "rxjs/operators"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('calldotnet')
  getDotNet() {
    return this.appService.getDotNetResponse()
      .pipe(
        map(response => response.data),
      )
  }

  @Get('callspringboot')
  getSpringBoot() {
    return this.appService.getSpringBootResponse()
      .pipe(
        map(response => response.data),
      )
  }
}
