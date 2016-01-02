import Backbone = require("backbone");

import SubViewOption = require("./SubViewOption");
import RenderOption = require("./RenderOption");


/**
 * Backbone.jsのViewをラップしたViewクラス<br>
 * 新たにViewクラスを作成する際は、このBaseViewクラスを継承して作成しています
 *
 * @class BaseView
 * @extends Backbone.View<Backbone.Model>
 * @constructor
 * @override
 * @param [options=null] {any}
 */
class BaseView extends Backbone.View<Backbone.Model> {

  /**
   * SubViewOptionを格納する配列
   *
   * @property _subViews
   * @protected
   * @type {SubViewOption[]}
   */
  protected _subViews: SubViewOption[];

  /**
   * View側で扱うJST
   *
   * @property _template
   * @protected
   * @type {(data: any) => string}
   */
  protected _template: (data: any) => string;


  constructor(options: any = null) {
    this._bindSubView();
    this.events = this._setEvents();
    super(options);
  }

  /**
   * Viewをレンダリングします<br>
   * 自身のViewをレンダリングした後に自身が持っている子Viewをすべてレンダリングします
   *
   * @override
   * @method render
   * @public
   * @param [options={}] {RenderOption} レンダリングする際のオプション
   * @return {BaseView} 自身であるViewインスタンス
   */
  public render(options: RenderOption = {}): BaseView {
    var html: any;
    if (this.model) {
      html = this._template(_.extend(this.model.toJSON(), options.data));
    } else {
      html = this._template(options.data);
    }
    this.$el.html(html);
    if (options.$append) {
      options.$append.append(this.$el);
    }
    this._renderSubView();
    return this;
  }

  /**
   * elプロパティに設定されているDOM要素の破棄、および、このビューに関連付けしているイベントを全て破棄します<br>
   * 廃棄する際は、自身が持っている子Viewのremoveメソッドを呼び出してから最後に自身をremoveします
   *
   * @override
   * @method remove
   * @public
   * @return {BaseView} 自身であるViewインスタンス
   */
  public remove(): BaseView {
    if (this.hasSubViews()) {
      _(this._subViews).each((subView: SubViewOption) => {
        subView.view.remove();
      });
    }
    super.remove();
    return this;
  }

  /**
   * 自身が子Viewを持っているかチェックします
   *
   * @method hasSubViews
   * @public
   * @return {boolean} 子Viewを持っていればtrue、持っていなければfalseを返します
   */
  public hasSubViews(): boolean {
    if (this._subViews) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * elプロパティに設定されているDOM要素をルートとするDOMツリー上で発火したイベントとコールバック関数との関連付けを設定します<br>
   * <br>
   * elプロパティに設定されているDOM要素をルートとするDOMツリーに新しいDOM要素を追加した場合にも、このeventsプロパティで設定している関連付けは動的に行われます。<br>
   * コールバック関数内のthisは、ビューのインスタンスに束縛されます。また、実在しないコールバック関数名を指定すると、例外をスローします。
   *
   * @method _setEvents
   * @protected
   * @return {any} 設定するイベントとコールバック関数との関連付け
   * @example
   *      protected _setEvents(): any {
   *        return {
   *          "click .dom-class": "callbackMethodName"
   *        };
   *      }
   */
  protected _setEvents(): any {
    return {};
  }

  /**
   * 子Viewをレンダリングします
   *
   * @method _renderSubView
   * @protected
   * @return {void}
   */
  protected _renderSubView(): void {
    if (!this.hasSubViews()) return;

    _(this._subViews).each((subView: SubViewOption) => {
      if (subView.selector) {
        subView.view.setElement(this.$(subView.selector));
      }
      subView.view.render();
    });
  }

  /**
   * 子Viewを自身のViewのプロパティとしてバインドします
   *
   * @method _bindSubView
   * @protected
   * @return {void}
   */
  protected _bindSubView(): void {
    if (!this.hasSubViews()) return;

    _(this._subViews).each((subView: SubViewOption) => {
      (<any>this)[subView.bind] = subView.view;
    });
  }

}
export = BaseView;
