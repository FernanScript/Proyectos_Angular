import { HomeComponent } from "./home.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Pipe, PipeTransform } from "@angular/core";
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
];

const bookServiceMock = {
  getBooks : () => of(listBook)
};

@Pipe({name : 'reduceText'})
class ReduceTextPipeMock implements PipeTransform {
  transform() : string {
    return '';
  }
}

describe('Home component', () => {
  let component : HomeComponent;
  let fixture : ComponentFixture<HomeComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule
      ],
      declarations : [
        HomeComponent,
        ReduceTextPipeMock
      ],
      providers : [
        // BookService
        {
          provide : BookService,
          useValue : bookServiceMock
        }
      ],
      schemas : [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach( ()=> {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //  antes de todo
  // beforeAll( () => {
  // });
  //  Despues de cada test
  // afterEach( () => {
  // });
  //  despues que han terminado todos los test
  // afterAll( () => {
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getBook from suscription', () => {
    const bookService = fixture.debugElement.injector.get(BookService);
    // const listBook : Book[] = [];
    // const spy1 = spyOn(bookService, 'getBooks').and.returnValue(of(listBook));
    component.getBooks();
    // expect(spy1).toHaveBeenCalled();
    expect(component.listBook.length).toBe(3);
  });
});
