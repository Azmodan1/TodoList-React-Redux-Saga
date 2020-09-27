import { TextBlock, TittleBlock, TextColumnsBlock } from './classes/blocks';

export const model = [
  new TittleBlock('Человек Эпохи Возрождения', {
    tag: 'h2',
    styles:
      'background: linear-gradient(to right, #cf3ce0, #f89327); color: #fff; text-align: center;  font-family:Tahoma; font-size: 100%',
  }),
  new TextBlock('Также известный как Лешрачья Власть', {
    styles:
      'background: linear-gradient(to bottom, black, blue); color: #fff;font-weight: bold; font-family:Tahoma; text-align: center',
  }),
  new TextColumnsBlock(['Azmodan', 'Number', 'One'], {
    styles:
      'padding: 1rem;background: linear-gradient(to top, #00ffea, #ff0000); color: #fff; text-align: center;font-weight: bold;  font-family:Tahoma;',
  }),
];
