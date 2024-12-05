import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsesListComponent } from './uses-list.component';

describe('UsesListComponent', () => {
  let component: UsesListComponent;
  let fixture: ComponentFixture<UsesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
