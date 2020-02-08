import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvhComponent } from './tvh.component';

describe('TvhComponent', () => {
  let component: TvhComponent;
  let fixture: ComponentFixture<TvhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
