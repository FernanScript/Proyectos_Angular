import { ReduceTextPipe } from "./reduce-text.pipe";

describe('Reduce next pipe', () => {
  let pipe : ReduceTextPipe;

  beforeEach( () => {
    pipe = new ReduceTextPipe();
  });

  it('Should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('use method transform', () => {
    const text = 'Hello this is a test in Angular';
    const newText = pipe.transform(text, 8);

    expect(newText.length).toBe(8);
  });
});
