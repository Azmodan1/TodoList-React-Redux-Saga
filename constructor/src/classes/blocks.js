import { col, row } from '../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }
  toHTML() {
    throw new Error(' Не реализован');
  }
}

export class TittleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { tag, styles } = this.options;
    return row(
      col(`
      <${tag}>${this.value}</${tag}>
    `),
      styles,
    );
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    return row(
      col(`
        <p>${this.value}</p>
    `),
      this.options.styles,
    );
  }
}

export class TextColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const html = this.value.map(item => col(item));
    return row(html.join(''), this.options.styles);
  }
}
