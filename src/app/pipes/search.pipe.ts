import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: any[], texto: string): any {
    if(!texto) return null;  
    return lista.filter(user=> user.email.toLowerCase().startsWith(texto.toLowerCase()))
  }

}
