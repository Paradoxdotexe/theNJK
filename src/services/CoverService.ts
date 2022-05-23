import { reactive, toRef } from 'vue';
import PromiseCallback from '@/util/PromiseCallback';

export default new (class CoverService {
  private refs = reactive({
    visible: false,
    callback: undefined as PromiseCallback<null> | undefined,
    color: '#000'
  });
  focusListener: ((e: Event) => void) | undefined = undefined;

  public addCover(color: string | null = null, focusListener: (e: Event) => void = () => null): Promise<null> {
    this.refs.color = color ?? '#000';
    this.focusListener = focusListener;
    if (this.focusListener) {
      document.addEventListener('focusin', this.focusListener);
    }

    this.refs.visible = true;
    document.body.classList.add('no-scrolling');
    this.refs.callback = new PromiseCallback();
    return this.refs.callback.promise;
  }

  public removeCover(): void {
    if (this.focusListener) {
      document.removeEventListener('focusin', this.focusListener);
      this.focusListener = undefined;
    }

    this.refs.visible = false;
    document.body.classList.remove('no-scrolling');
    if (this.refs.callback) {
      this.refs.callback.resolve(null);
    }
  }

  public getVisibleRef() {
    return toRef(this.refs, 'visible');
  }

  public getColorRef() {
    return toRef(this.refs, 'color');
  }
})();
