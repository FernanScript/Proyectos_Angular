import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { BookService } from "./book.service"
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Book } from '../models/book.model';
import { environment } from "src/environments/environment";
import swal from 'sweetalert2';

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
];

const book : Book = {
    name : '',
    author : '',
    isbn : '',
    price : 16,
    amount : 5
}

describe('BookService', () => {
  let service : BookService;
  let httpMock : HttpTestingController;
  let storage = {};

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule
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
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);

    storage = {};
    spyOn(localStorage, 'getItem').and.callFake((key:string) => {
      return storage[key] ? storage[key] : null;
    });

    spyOn(localStorage, 'setItem').and.callFake( (key:string, value:string) => {
      return storage[key] = value;
    });
  });

  afterEach( () => {
    httpMock.verify();
  });

  it('Should create', () => {
    expect(service).toBeTruthy();
  });

  it('getBooks return list book and does a get method', () => {
    service.getBooks().subscribe((resp:Book[]) => {
      expect(resp).toEqual(listBook);
    });

    const req = httpMock.expectOne(environment.API_REST_URL + `/book`);
    // la peticion que se haga al url sea un GET
    expect(req.request.method).toBe('GET');
    req.flush(listBook);
  });

  it('getBooksFromCart return empty array when localStorage is empty', () => {
    const listBooks = service.getBooksFromCart();
    expect(listBooks.length).toBe(0);
  });

  it('addBookToCart add books correctly when localStorage is empty', () => {
    const toast = {
      fire : () => null
    } as any;
    const spy1 = spyOn(swal, 'mixin').and.callFake( () => {
      return toast;
    });
    let listBook = service.getBooksFromCart();
    expect(listBook.length).toBe(0);
    service.addBookToCart(book);
    listBook = service.getBooksFromCart();
    // expect(listBook.length).toBe(1);
    service.addBookToCart(book);
    expect(spy1).toHaveBeenCalled();
  });

  it('removeBooksFromCart removes the list from the Localstorage', () => {
    service.addBookToCart(book);
    let listBook = service.getBooksFromCart();
    expect(listBook.length).toBe(1);
    service.removeBooksFromCart();
    listBook = service.getBooksFromCart();
    expect(listBook.length).toBe(0);
  });
});
