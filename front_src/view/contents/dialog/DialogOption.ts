/**
 * ダイアログオプション
 *
 * @interface DialogOption
 */
interface DialogOption {

  /**
   * ダイアログのヘッダ部分に表示するタイトル名
   *
   * @property title
   * @type {string}
   */
  title?: string;

  /**
   * ダイアログの幅
   *
   * @property width
   * @type {any}
   */
  width?: any;

  /**
   * ダイアログの高さ
   *
   * @property height
   * @type {any}
   */
  height?: any;

  /**
   * ダイアログを表示する際の上からの位置
   *
   * @property top
   * @type {number}
   */
  top?: number;

  /**
   * ダイアログを表示する際の左からの位置
   *
   * @property left
   * @type {number}
   */
  left?: number;

  /**
   * モーダルで表示させるか<br>
   * trueだとモーダル、falseだとモードレスで表示します
   *
   * @property modal
   * @type {boolean}
   */
  modal?: boolean;

  /**
   * ダイアログのDOM要素を追加するための要素
   *
   * @property container
   * @type {JQuery}
   */
  container?: JQuery;
}
export = DialogOption;
