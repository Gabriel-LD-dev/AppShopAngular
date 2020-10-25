import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateauxCategoryPage } from './bateaux-category.page';

describe('BateauxCategoryPage', () => {
  let component: BateauxCategoryPage;
  let fixture: ComponentFixture<BateauxCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateauxCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateauxCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
