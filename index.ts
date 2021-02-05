type IStatus = 'pending' | 'fulfilled' | 'rejected';

type IResponse<T> = (res?: T) => void;

type ICtorParams<T> = (resolve: IResponse<T>, reject: IResponse<T>) => void;

class myPormise<T> {
  private _status: IStatus = 'pending';
  private _msg: T = null;
  constructor(callback: ICtorParams<T>) {
    callback(this.resolve.bind(this), this.reject.bind(this));
    return this;
  }
  private resolve(res?: T) {
    console.log('resolve');
    this._status === 'pending' && (this._status = 'fulfilled');
    !this._msg && (this._msg = res);
  }
  private reject(err?: T) {
    this._status === 'pending' && (this._status = 'rejected');
    !this._msg && (this._msg = err);
  }
  then(callback?: IResponse<T>) {
    callback(this._msg);
    return this;
  }
  catch(callback?: IResponse<T>) {
    callback(this._msg);
    return this;
  }
  finally(callback?: () => void) {
    callback();
    return this;
  }
}

const abc = () => {};

// // console.log(123);
const mypromise = new myPormise(function(res, rej) {
  // console.log(this)
  // console.log('res', res);
  // console.log('rej', rej);
  // console.log(setTimeout);
  // setTimeout(() => {
  //   console.log('setInterval');
  //   res('成功');
  // }, 1000);
  // rej('失败');
  res('成功');
});
mypromise
  .then((res) => {
    // console.log(this);
    console.log('mypromise.then', res);
  })
  .catch((err) => {
    console.log('mypromise.catch', err);
  });
