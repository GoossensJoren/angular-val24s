import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stringlimit' })
export class LimitStringPipe implements PipeTransform {
    transform(text: string) : string {
        if(text.length > 50){
            text = text.slice(0,50) + "...";
        }
        return text;
    }
}