import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoPlacesComponent } from './geo-places.component';

describe('GeoPlacesComponent', () => {
  let component: GeoPlacesComponent;
  let fixture: ComponentFixture<GeoPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
