import {HttpService, Injectable} from '@nestjs/common'
import {Observable} from "rxjs"


@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {
  }

  getHello(): string {
    return 'Hello World From NodeJS!'
  }

  getDotNetResponse():Observable<any> {
    return this.httpService.get('http://service-dotnet-hello-world:80/api/products')
  }

  getSpringBootResponse():Observable<any> {
    return this.httpService.get('http://service-springboot-hello-world:8080')
  }

}
