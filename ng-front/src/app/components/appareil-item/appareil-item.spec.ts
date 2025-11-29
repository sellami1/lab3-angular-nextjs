import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilItem } from './appareil-item';

describe('AppareilItem', () => {
  let component: AppareilItem;
  let fixture: ComponentFixture<AppareilItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppareilItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppareilItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
