import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleappComponent } from './puzzleapp.component';

describe('PuzzleappComponent', () => {
  let component: PuzzleappComponent;
  let fixture: ComponentFixture<PuzzleappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzleappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
