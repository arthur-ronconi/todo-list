import { Component, inject, input, output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  onInput = output<string>();
  label = input<string>();
  placeholder = input<string>();

  onInputHandler(event: Event) {
    this.onInput.emit((event.target as HTMLInputElement).value);
  }
}
