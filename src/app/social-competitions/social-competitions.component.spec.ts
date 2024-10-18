import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCompetitionsComponent } from './social-competitions.component';

describe('SocialCompetitionsComponent', () => {
  let component: SocialCompetitionsComponent;
  let fixture: ComponentFixture<SocialCompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialCompetitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
