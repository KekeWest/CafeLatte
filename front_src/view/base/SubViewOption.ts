import BaseView = require("./BaseView");

/**
 * Viewに子Viewを持たせる際のオプション
 *
 * @interface SubViewOption
 */
interface SubViewOption {

  /**
   * 自身のViewインスタンスのプロパティとしてバインドする際のプロパティ名
   *
   * @property bind
   * @type {string}
   */
  bind?: string;

  /**
   * 子Viewインスタンス
   *
   * @property view
   * @type {BaseView}
   */
  view: BaseView;

  /**
   * ビューに関連付けするDOM要素のセレクタ
   *
   * @property selector
   * @type {string}
   */
  selector?: string;
}
export = SubViewOption;
