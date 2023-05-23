import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { BookService } from "./book.service"
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Book } from '../models/book.model';
import { environment } from "src/environments/environment";

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

describe('BookService', () => {
  let service : BookService;
  let httpMock : HttpTestingController;

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
  });

  afterEach( () => {
    httpMock.verify();
  });

  it('Should create', () => {
    expect(service).toBeTruthy();
  });

  // public getBooks(): Observable<Book[]> {
  //   const url: string = environment.API_REST_URL + `/book`;
  //   return this._httpClient.get<Book[]>(url);
  // }

  it('getBooks return list book and does a get method', () => {
    service.getBooks().subscribe((resp:Book[]) => {
      expect(resp).toEqual(listBook);
    });

    const req = httpMock.expectOne(environment.API_REST_URL + `/book`);
    // la peticion que se haga al url sea un GET
    expect(req.request.method).toBe('GET');
    req.flush(listBook);
  });
});
