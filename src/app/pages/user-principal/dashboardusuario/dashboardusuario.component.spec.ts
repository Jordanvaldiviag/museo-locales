import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardusuarioComponent } from './dashboardusuario.component';

describe('DashboardusuarioComponent', () => {
  let component: DashboardusuarioComponent;
  let fixture: ComponentFixture<DashboardusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
