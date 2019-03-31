// Student Name: Ishratben Vahora
// StudentID: 300986257
// Date: 2019-03-30
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDeleteComponent } from './contact-delete.component';

describe('ContactDeleteComponent', () => {
  let component: ContactDeleteComponent;
  let fixture: ComponentFixture<ContactDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
