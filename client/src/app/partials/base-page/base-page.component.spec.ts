// Student Name: Ishratben Vahora
// StudentID: 300986257
// Date: 2019-03-30
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePageComponent } from './base-page.component';

describe('BasePageComponent', () => {
  let component: BasePageComponent;
  let fixture: ComponentFixture<BasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
