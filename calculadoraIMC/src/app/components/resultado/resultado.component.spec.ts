import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResultadoComponent } from './resultado.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('ResultadoComponent', () => {
  let component: ResultadoComponent;
  let fixture: ComponentFixture<ResultadoComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule
      ],
      declarations: [
        ResultadoComponent
      ],
      schemas : [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(ResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
