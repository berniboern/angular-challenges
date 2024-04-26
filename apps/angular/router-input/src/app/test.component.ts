import { AsyncPipe } from '@angular/common';
import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div>TestId: {{ testId }}</div>
    <div>Permission: {{ permission }}</div>
    <div>User: {{ user }}</div>
  `,
})
export default class TestComponent {
  @Input({ transform: numberAttribute }) testId = 0;
  @Input() permission = '';
  @Input() user = '';
}
