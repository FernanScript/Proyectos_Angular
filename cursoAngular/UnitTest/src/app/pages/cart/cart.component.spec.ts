import { CartComponent } from "./cart.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from "src/app/services/book.service";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

describe('Cart component', () => {

  let component : CartComponent;
  let fixture : ComponentFixture<CartComponent>

  beforeEach( () => {
    TestBed.configureTestingModule({
      import : [
        HttpClientTestingModule
      ],
      declarations : [
        CartComponent
      ],
      providers : [
        BookService
      ],
      schemas : [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    });
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
