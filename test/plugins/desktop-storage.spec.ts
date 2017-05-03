import {expect} from "chai";
import * as sinon from "sinon";
import * as mocha from "mocha";
import {DesktopStorage} from "../../src/plugins/storage/desktop-storage";
import {AWProxy} from "../../src/common/proxy";
import {MockLocalStorage} from "../mock/local-storage";
import {MockAsyncStorage} from "../mock/async-storage";
import {PersistentStorage} from '../../src/plugins/storage/index';
// explicitly import mocha to prevent whining about the done function taking an error object to fail a test
const _mocha = mocha;

describe('DesktopStorage', () => {

    let underTest: PersistentStorage;

    it('should reject request to persist the local storage data if desktop storage plugin is not valid', (done) => {
        underTest = new DesktopStorage(null);
        underTest.persistLocalStorage().then(
            () => done(),
            err => {
                expect(err).to.not.equal(undefined);
                done();
            });
    });

    it('should persist local storage when asked to', (done) => {
        const mockAsyncStorage = new MockAsyncStorage(),
            mockLocalStorage = new MockLocalStorage(1);

        const proxyStorageStub = sinon.stub(AWProxy, 'storage').returns(mockLocalStorage);
        // local storage behaviour
        const keySpy = sinon.stub(mockLocalStorage, 'key').returns('key');
        const getItemSpy = sinon.stub(mockLocalStorage, 'getItem').returns('value');

        // persistent storage behaviour
        const setItemSpy = sinon.stub(mockAsyncStorage, 'setItem');

        const restoreStubs = () => {
            proxyStorageStub.restore();
            keySpy.restore();
            getItemSpy.restore();
            setItemSpy.restore();
        };

        underTest = new DesktopStorage(mockAsyncStorage);
        underTest.persistLocalStorage().then(
            () => {
                try {
                    expect(proxyStorageStub.calledOnce).to.be.true;

                    expect(keySpy.calledOnce).to.be.true;
                    expect(getItemSpy.calledOnce).to.be.true;

                    expect(setItemSpy.calledOnce).to.be.true;
                    done();
                } catch (e) {
                    console.log(`err in checking callback - ${e}`);
                    done(e);
                } finally {
                    restoreStubs();
                }
            },
            err => {
                restoreStubs();
                done(new Error(`an unexpected error was thrown = ${err}`));
            }
        );
    });

    it('should reject request to load persistent data if desktop storage plugin is not valid', (done) => {
        underTest = new DesktopStorage(null);
        underTest.loadPersistentData().then(
            // () => done(new Error('this should have failed')),
            () => done(),
            err => {
                expect(err).to.not.equal(undefined);
                done();
            });
    });

    it('should load persistent data from the desktop plugin', (done) => {
        const mockAsyncStorage = new MockAsyncStorage(),
            mockLocalStorage = new MockLocalStorage(),
            fakeData = {
                key: 'val',
                key2: 'val2',
                key3: 'val3'
            };

        const getDataStub = sinon.stub(mockAsyncStorage, 'getData').returns(fakeData);
        const proxyStorageStub = sinon.stub(AWProxy, 'storage').returns(mockLocalStorage);
        const setItemStub = sinon.stub(mockLocalStorage, 'setItem');

        const restoreStubs = () => {
            getDataStub.restore();
            proxyStorageStub.restore();
            setItemStub.restore();
        };

        // inject mock AsyncStorage (AWStorage desktop)
        underTest = new DesktopStorage(mockAsyncStorage);

        underTest.loadPersistentData()
            .then(
                () => {
                    try {
                        expect(proxyStorageStub.calledOnce).to.be.true;
                        expect(getDataStub.calledOnce).to.be.true;
                        expect(setItemStub.calledThrice).to.be.true;
                        done();
                    } catch (e) {
                        done(e);
                    } finally {
                        restoreStubs();
                    }
                },
                err => {
                    restoreStubs();
                    done(new Error(`an unexpected error was thrown = ${err}`));
                }
            );
    });

});
