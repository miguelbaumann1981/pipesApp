import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
   name: 'vuela'
})
export class VuelaPipe implements PipeTransform {
   transform(puedeVolar: boolean = true): string {
      return puedeVolar ? 'vuela' : 'no vuela';
   }
}