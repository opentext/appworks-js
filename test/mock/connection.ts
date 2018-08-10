import {ConnectionInterface} from "../../src/plugins/network-information/index";

export class MockConnection implements ConnectionInterface {
  type: string;

  addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void {

  }

  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void {

  }
}
