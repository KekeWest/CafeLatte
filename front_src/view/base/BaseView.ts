import Backbone = require("backbone");

import SubViewOption = require("./SubViewOption");


class BaseView extends Backbone.View<Backbone.Model> {

  protected _subViews: SubViewOption[];
  protected _template: (data: any) => string;

  constructor(options?: any) {
    super(options);
    this._bindSubView();
  }

  public render(): BaseView {
    var html: any;
    if (this.model) {
      html = this._template(this.model.toJSON());
    } else {
      html = this._template({});
    }
    this.$el.html(html);
    this._renderSubView();
    return this;
  }

  public hasSubViews(): boolean {
    if (this._subViews) {
      return true;
    } else {
      return false;
    }
  }

  protected _renderSubView(): void {
    if (!this.hasSubViews()) return;

    _(this._subViews).each((subView: SubViewOption) => {
      if (subView.selector) {
        subView.view.setElement(this.$(subView.selector));
      }
      subView.view.render();
    });
  }

  protected _bindSubView(): void {
    if (!this.hasSubViews()) return;

    _(this._subViews).each((subView: SubViewOption) => {
      (<any>this)[subView.bind] = subView.view;
    });
  }

}
export = BaseView;
