import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidBossesTableComponent } from './raid-bosses-table.component';

describe('RaidBossesTableComponent', () => {
  let component: RaidBossesTableComponent;
  let fixture: ComponentFixture<RaidBossesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidBossesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidBossesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
