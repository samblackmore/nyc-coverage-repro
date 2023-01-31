import MyDefaultValue, { foo } from './exports'

function doSomething(arg: boolean) {
  return arg ? MyDefaultValue : foo
}

export {
  doSomething,
}
