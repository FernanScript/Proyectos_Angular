import { CartComponent } from "./cart.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from "src/app/services/book.service";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { Book } from "src/app/models/book.model";

const listBook : Book[] = [
  {
    name : '',
    author : '',
    isbn : '',
    price : 20,
    amount : 2
  },
  {
    name : '',
    author : '',
    isbn : '',
    price : 40,
    amount : 10
  },
  {
    name : '',
    author : '',
    isbn : '',
    price : 10,
    amount : 20
  },
]

describe('Cart component', () => {

  let component : CartComponent;
  let fixture : ComponentFixture<CartComponent>;
  let service : BookService;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule  // modulos necesarios
      ],
      declarations : [
        CartComponent  // componentes necesarios
      ],
      providers : [
        BookService // servicios necesarios
      ],
      schemas : [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();  // para que se compilen bien los test
  });

  // Instanciamos el test
  beforeEach( () => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(BookService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getTotalPrice', () => {
    const totalPrice = component.getTotalPrice(listBook);

    // Tres maneras de comprobar
    expect(totalPrice).toBeGreaterThan(0);
    expect(totalPrice).not.toBeNull();
    expect(totalPrice).not.toBe(0);
  });

  it('onInputNumberChange increment correctly', () => {
    const action = 'plus';
    const book = listBook[0];

    const spy1 = spyOn(service, 'updateAmountBook').and.callFake (()=> null);
    const spy2 = spyOn(component,'getTotalPrice').and.callFake (()=> null);

    expect(book.amount).toBe(2);

    component.onInputNumberChange(action, book);

    expect(book.amount === 3).toBeTrue();

    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();

  });

  it('onInputNumberChange decrement correctly', () => {
    const action = 'minus';
    const book = listBook[0];

    const spy1 = spyOn(service, 'updateAmountBook').and.callFake (()=> null);
    const spy2 = spyOn(component,'getTotalPrice').and.callFake (()=> null);

    expect(book.amount).toBe(3);

    component.onInputNumberChange(action, book);

    expect(book.amount).toBe(2);

    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();

  });
});
