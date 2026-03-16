import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryNavComponent } from './primary-nav.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('PrimaryNavComponent', () => {
  let component: PrimaryNavComponent;
  let fixture: ComponentFixture<PrimaryNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryNavComponent],
      providers: [provideRouter([]), provideAnimations()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
