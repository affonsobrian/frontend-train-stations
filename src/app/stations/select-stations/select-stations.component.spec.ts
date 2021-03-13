import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStationsComponent } from './select-stations.component';

describe('SelectStationsComponent', () => {
  let component: SelectStationsComponent;
  let fixture: ComponentFixture<SelectStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
