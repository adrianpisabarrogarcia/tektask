import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { UsersService } from '../../../services/users.service';
import { InputTextModule } from 'primeng/inputtext';
import { User } from '../../../models/user.model';
import { Role } from '../../../models/role.enum';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-users-modal',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  visible: boolean = false;
  user: User = {
    id: 0,
    nombre: '',
    correo: '',
    rol_id: Role.Administrador,
    fecha_creacion: new Date(),
    fecha_actualizacion: new Date(),
    activo: false
    };

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.modalVisibility$.subscribe(visible => {
      this.visible = visible;
    });
  }


}
