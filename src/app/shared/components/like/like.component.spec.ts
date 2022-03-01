import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeComponent } from './like.component';
import { LikeModule } from './like.module';

describe(LikeComponent.name, () => {
  let fixture: ComponentFixture<LikeComponent>;
  let component: LikeComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeComponent.prototype.like.name}
    should trigger (@Output liked) when called`, () => {
      spyOn(component.liked, 'emit');
      fixture.detectChanges();
      component.like();
      expect(component.liked.emit).toHaveBeenCalled();
  });
});
