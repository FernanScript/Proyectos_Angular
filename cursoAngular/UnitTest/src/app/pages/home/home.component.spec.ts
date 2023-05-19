import { HomeComponent } from "./home.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BookService } from "src/app/services/book.service";
import { Book } from 'src/app/models/book.model';
import { of } from "rxjs";

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

describe('Home component', () => {
  let component : HomeComponent;
  let fixture : ComponentFixture<HomeComponent>;
  let service : BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule
      ],
      declarations : [
        HomeComponent
      ],
      providers : [
        BookService
      ],
      schemas : [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(BookService);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('getBooks from suscription', () => {
    const spy1 = spyOn(service,'getBooks').and.returnValue(of(listBook));

    component.getBooks();

    expect(spy1).toHaveBeenCalled();
    expect(listBook.length).toBe(3);
  });
});
