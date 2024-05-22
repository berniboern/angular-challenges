import { Component } from '@angular/core';

import {
  animate,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  standalone: true,
  providers: [],
  imports: [],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [animate('1s')]),
    ]),
    trigger('slideInLeft', [
      state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
      state('*', style({ opacity: 1, transform: 'translateX(0)' })),
      transition(':enter', [animate('0.5s')]),
    ]),
    trigger('slideInBottom', [
      state('void', style({ opacity: 0, transform: 'translateY(100%)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [animate('1s')]),
    ]),
    trigger('slideInTop', [
      state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [animate('1s')]),
    ]),

    trigger('listAnimation', [
      transition(':enter', [
        query('div', [
          stagger(100, [
            animate(
              '0.5s',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateX(-20px)',
                  offset: 0,
                }),
                style({
                  opacity: 1,
                  transform: 'translateX(10px)',
                  offset: 0.5,
                }),
                style({
                  opacity: 1,
                  transform: 'translateX(0)',
                  offset: 1.0,
                }),
              ]),
            ),
          ]),
        ]),
      ]),
    ]),
  ],
  selector: 'app-root',
  styles: `
    section {
      @apply flex flex-1 flex-col gap-5;
    }

    .list-item {
      @apply flex flex-row border-b px-5 pb-2;

      span {
        @apply flex-1;
      }
    }
  `,
  template: `
    <div class="mx-20 my-40 flex gap-5">
      <section @slideInLeft>
        <div>
          <h3>2008</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia sequi accusantium, distinctio similique laudantium eveniet
            quidem sit placeat possimus tempore dolorum inventore corporis atque
            quae ad, nobis explicabo delectus.
          </p>
        </div>

        <div>
          <h3>2010</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia sequi accusantium, distinctio similique laudantium eveniet
            quidem sit placeat possimus tempore dolorum inventore corporis atque
            quae ad, nobis explicabo delectus.
          </p>
        </div>

        <div>
          <h4>2012</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia sequi accusantium, distinctio similique laudantium eveniet
            quidem sit placeat possimus tempore dolorum inventore corporis atque
            quae ad, nobis explicabo delectus.
          </p>
        </div>
      </section>

      <section @listAnimation>
        <div class="list-item">
          <span>Name:</span>
          <span>Samuel</span>
        </div>

        <div class="list-item">
          <span>Age:</span>
          <span>28</span>
        </div>

        <div class="list-item">
          <span>Birthdate:</span>
          <span>02.11.1995</span>
        </div>

        <div class="list-item">
          <span>City:</span>
          <span>Berlin</span>
        </div>

        <div class="list-item">
          <span>Language:</span>
          <span>English</span>
        </div>

        <div class="list-item">
          <span>Like Pizza:</span>
          <span>Hell yeah</span>
        </div>
      </section>
    </div>
  `,
})
export class AppComponent {}
