import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComponent } from './principal.component';

fdescribe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('cambiar altura', () => {
  //   const altura = 180;
  //   expect(component.cambiarAltura(altura)).not.toBeUndefined();
  // });

  it('sexo sea masculino', () => {
    component.masculino();
    expect(component.sexo).toBe('masculino');
  });

  it('sexo sea femenino', () => {
    component.femenino();
    expect(component.sexo).toBe('femenino');
  });

  // it('valores de calculadora IMC', () => {
  //   const altura = component.altura;
  //   const peso = component.peso;

  //   component.CalcularIMC();

  //   expect(altura).not.toBeNull();
  //   expect(peso).not.toBeNull();
  // });
});
