import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mapToIterable"
})
export class MapToIterablePipe implements PipeTransform {
  transform(v: any, args?: any): any {
    return Object.keys(v).map(k => {
      return {
        key: k,
        value: v[k]
      };
    });
  }
}
