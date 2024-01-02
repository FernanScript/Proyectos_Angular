import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PrincipalComponent } from './principal.component';

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate the IMC correctly', () => {
    component.peso = 70;
    component.altura = 170;
    component.CalcularIMC();
    component['router'].navigate = jasmine.createSpy('navigate');
    expect(component['router'].navigate).toHaveBeenCalledWith(['/resultado', '24.2']);
  });
});
