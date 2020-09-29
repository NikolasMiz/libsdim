import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapThemesComponent } from './bootstrap-themes.component';

describe('BootstrapThemesComponent', () => {
  let component: BootstrapThemesComponent;
  let fixture: ComponentFixture<BootstrapThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapThemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
