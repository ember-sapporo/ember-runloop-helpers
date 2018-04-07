import Helper from '@ember/component/helper';
import { debounce, cancel } from '@ember/runloop';

export default Helper.extend({
  compute([method, wait, ...headArgs], {immediate = false}) {
    return (...tailArgs) => {
      this.timer = debounce(null, method, ...headArgs, ...tailArgs, wait, immediate);
    };
  },

  willDestroy() {
    if (this.timer) {
      cancel(this.timer);
    }

    this._super(...arguments);
  }
});
