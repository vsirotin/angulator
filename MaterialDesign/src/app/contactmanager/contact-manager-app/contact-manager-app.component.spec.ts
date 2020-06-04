import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerAppComponent } from './contact-manager-app.component';

describe('ContactManagerAppComponent', () => {
  let component: ContactManagerAppComponent;
  let fixture: ComponentFixture<ContactManagerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactManagerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactManagerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
