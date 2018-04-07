import Helper from '@ember/component/helper';
import { throttle, cancel } from '@ember/runloop';

export default Helper.extend({
  compute([method, spacing, ...headArgs], {immediate = false}) {
    return (...tailArgs) => {
      this.timer = throttle(null, method, ...headArgs, ...tailArgs, spacing, immediate);
    };
  },

  willDestroy() {
    if (this.timer) {
      cancel(this.timer);
    }

    this._super(...arguments);
  }
});
