import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule],
  template: `<router-outlet></router-outlet><p-toast></p-toast>`,
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'TekTask';

  constructor(private messageService: MessageService) { }
}
