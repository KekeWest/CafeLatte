/**
 * Viewをレンダリングする際のオプション
 *
 * @interface RenderOption
 */
interface RenderOption {

  /**
   * JSTに渡すオブジェクト
   *
   * @property data
   * @type {any}
   */
  data?: any;

  /**
   * レンダリングする要素を追加するための親要素
   *
   * @property $append
   * @type {JQuery}
   */
  $append?: JQuery;
}
export = RenderOption;
