export class Post {
  private _title: string;
  private _content: string;
  private _loveIts: number;
  private _createdAt: Date;

  constructor(title: string, content: string) {
    this._loveIts = 0;
    this._createdAt = new Date();
    this._title = title;
    this._content = content;
  }
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get loveIts(): number {
    return this._loveIts;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  loveIt() {
    this._loveIts++;
  }
  dontLoveIt() {
    this._loveIts--;
  }
}
