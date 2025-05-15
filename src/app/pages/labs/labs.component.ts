import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  title = 'todo-app';
  welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = [
    'instalar el angular CLI',
    'crear proyecto',
    'crear componentes',
  ];

  name: string = 'hans';
  age: number = 23;
  state: boolean = true;
  img:string="https://www.cesuma.mx/blog/wp-content/uploads/2023/04/b2ap3_large_Relaciones-publicas.jpeg";
  
  person = {
    name:"hans",
    age:18,
    avatar:'hola',
  }
  
}
