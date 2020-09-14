import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchshopComponent } from './watchshop.component';

describe('WatchshopComponent', () => {
  let component: WatchshopComponent;
  let fixture: ComponentFixture<WatchshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
