import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsManagementComponent } from './goods-management.component';

describe('GoodsManagementComponent', () => {
  let component: GoodsManagementComponent;
  let fixture: ComponentFixture<GoodsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
