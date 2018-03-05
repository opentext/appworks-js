import {expect} from 'chai';
import {noop} from "../../src/common/util";
import {AWRealm, Realm} from "../../src/plugins/realm/realm";

describe('QRReader', () => {
    it('should define a startRealm function', () => {
        let o = new Realm(noop, noop);
        expect(o.startRealm).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.startRealm).to.not.equal(undefined);
    });
    it('should define a getAllObjectNames function', () => {
        let o = new Realm(noop, noop);
        expect(o.getAllObjectNames).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.getAllObjectNames).to.not.equal(undefined);
    });
    it('should define a objectExists function', () => {
        let o = new Realm(noop, noop);
        expect(o.objectExists).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.objectExists).to.not.equal(undefined);
    });
    it('should define a createObject function', () => {
        let o = new Realm(noop, noop);
        expect(o.createObject).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.createObject).to.not.equal(undefined);
    });
    it('should define a addField function', () => {
        let o = new Realm(noop, noop);
        expect(o.addField).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.addField).to.not.equal(undefined);
    });
    it('should define a addFields function', () => {
        let o = new Realm(noop, noop);
        expect(o.addFields).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.addFields).to.not.equal(undefined);
    });
    it('should define a describeObject function', () => {
        let o = new Realm(noop, noop);
        expect(o.describeObject).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.describeObject).to.not.equal(undefined);
    });
    it('should define a objectHasField function', () => {
        let o = new Realm(noop, noop);
        expect(o.objectHasField).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.objectHasField).to.not.equal(undefined);
    });
    it('should define a getFieldType function', () => {
        let o = new Realm(noop, noop);
        expect(o.getFieldType).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.getFieldType).to.not.equal(undefined);
    });
    it('should define a insert function', () => {
        let o = new Realm(noop, noop);
        expect(o.insert).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.insert).to.not.equal(undefined);
    });
    it('should define a update function', () => {
        let o = new Realm(noop, noop);
        expect(o.update).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.update).to.not.equal(undefined);
    });
    it('should define a select function', () => {
        let o = new Realm(noop, noop);
        expect(o.select).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.select).to.not.equal(undefined);
    });
    it('should define a remove function', () => {
        let o = new Realm(noop, noop);
        expect(o.remove).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.remove).to.not.equal(undefined);
    });
    it('should define a removeAll function', () => {
        let o = new Realm(noop, noop);
        expect(o.removeAll).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.removeAll).to.not.equal(undefined);
    });
    it('should define a queryBuilder function', () => {
        let o = new Realm(noop, noop);
        expect(o.queryBuilder).to.not.equal(undefined);
        let awo = new AWRealm(noop, noop);
        expect(awo.queryBuilder).to.not.equal(undefined);

        expect(o.queryBuilder.equalTo).to.not.equal(undefined);
        expect(o.queryBuilder.notEqualTo).to.not.equal(undefined);
        expect(o.queryBuilder.beginsWith).to.not.equal(undefined);
        expect(o.queryBuilder.endsWith).to.not.equal(undefined);
        expect(o.queryBuilder.contains).to.not.equal(undefined);
        expect(o.queryBuilder.between).to.not.equal(undefined);
        expect(o.queryBuilder.greaterThan).to.not.equal(undefined);
        expect(o.queryBuilder.greaterThanOrEqualTo).to.not.equal(undefined);
        expect(o.queryBuilder.lessThan).to.not.equal(undefined);
        expect(o.queryBuilder.lessThanOrEqualTo).to.not.equal(undefined);
        expect(o.queryBuilder.like).to.not.equal(undefined);
        expect(o.queryBuilder.and).to.not.equal(undefined);
        expect(o.queryBuilder.or).to.not.equal(undefined);
        expect(o.queryBuilder.beginGroup).to.not.equal(undefined);
        expect(o.queryBuilder.endGroup).to.not.equal(undefined);
        expect(o.queryBuilder.done).to.not.equal(undefined);
        expect(o.queryBuilder.clear).to.not.equal(undefined);
    });
});