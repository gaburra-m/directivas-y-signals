import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css'],
})
export class PropertiesPageComponent {
  public counter = signal(10);
  public user = signal<User>({
    id: 1,
    email: 'gabo@gmail.com',
    first_name: 'Gabriel',
    last_name: 'Morales',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  public fullName = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );

  public userChangedEffect = effect(() => {
    // los efectos se autodestruyen.
    console.log(`Effect: ${this.user().first_name} - ${this.counter()}`);
  });

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }

  onFieldUpdated(field: keyof User, value: string) {
    // this.user.set({ <- Es una manera de hacerlo pero algo peligrsa, con keyof se puede hacer mas seguro
    //   ...this.user(),
    //   [field]: value,
    // });
    //
    // La misma manera de hacerlo pero con update, algo peligrosa, con keyof se puede hacer mas seguro
    // this.user.update(current => ({
    //   ...current,
    //   [field]: value
    // }))

    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;

        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;

        case 'avatar':
          current.avatar = value;
          break;

        case 'id':
          current.id = Number(value);
          break;
      }

      return current;
    });
  }
}
