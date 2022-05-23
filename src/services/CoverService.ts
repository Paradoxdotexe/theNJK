import { reactive, toRef } from 'vue';
import PromiseCallback from '@/util/PromiseCallback';

export default class CoverService {
  private refs = reactive({
    visible: false,
    callback: undefined as PromiseCallback<null> | undefined
  });

  public addCover(): Promise<null> {
    this.refs.visible = true;
    document.body.classList.add('no-scrolling');
    this.refs.callback = new PromiseCallback();
    return this.refs.callback.promise;
  }

  public removeCover(): void {
    this.refs.visible = false;
    document.body.classList.remove('no-scrolling');
    if (this.refs.callback) {
      this.refs.callback.resolve(null);
    }
  }

  public getVisibleRef() {
    return toRef(this.refs, 'visible');
  }
}

export const NavCoverService = new CoverService();
export const ConnectCoverService = new CoverService();