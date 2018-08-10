import {expect} from "chai";
import {AWCalendar} from "../../src/plugins/calendar/calendar";

describe("Calendar", () => {
  it("should define a hasReadPermission function", () => {
    let calendar = new AWCalendar();
    expect(calendar.hasReadPermission).to.not.equal(undefined);
  });

  it("should define a requestReadPermission function", () => {
    let obj = new AWCalendar();
    expect(obj.requestReadPermission).to.not.equal(undefined);
  });

  it("should define a hasWritePermission function", () => {
    let obj = new AWCalendar();
    expect(obj.hasWritePermission).to.not.equal(undefined);
  });

  it("should define a requestWritePermission function", () => {
    let obj = new AWCalendar();
    expect(obj.requestWritePermission).to.not.equal(undefined);
  });

  it("should define a hasReadWritePermission function", () => {
    let obj = new AWCalendar();
    expect(obj.hasReadWritePermission).to.not.equal(undefined);
  });

  it("should define a requestReadWritePermission function", () => {
    let obj = new AWCalendar();
    expect(obj.requestReadWritePermission).to.not.equal(undefined);
  });

  it("should define a createCalendar function", () => {
    let obj = new AWCalendar();
    expect(obj.createCalendar).to.not.equal(undefined);
  });

  it("should define a deleteCalendar function", () => {
    let obj = new AWCalendar();
    expect(obj.deleteCalendar).to.not.equal(undefined);
  });

  it("should define a openCalendar function", () => {
    let obj = new AWCalendar();
    expect(obj.openCalendar).to.not.equal(undefined);
  });

  it("should define a createEventWithOptions function", () => {
    let obj = new AWCalendar();
    expect(obj.createEventWithOptions).to.not.equal(undefined);
  });

  it("should define a createEvent function", () => {
    let obj = new AWCalendar();
    expect(obj.createEvent).to.not.equal(undefined);
  });

  it("should define a createEventInteractivelyWithOptions function", () => {
    let obj = new AWCalendar();
    expect(obj.createEventInteractivelyWithOptions).to.not.equal(undefined);
  });

  it("should define a createEventInteractively function", () => {
    let obj = new AWCalendar();
    expect(obj.createEventInteractively).to.not.equal(undefined);
  });

  it("should define a findEventWithOptions function", () => {
    let obj = new AWCalendar();
    expect(obj.findEventWithOptions).to.not.equal(undefined);
  });

  it("should define a findEvent function", () => {
    let obj = new AWCalendar();
    expect(obj.findEvent).to.not.equal(undefined);
  });

  it("should define a findAllEventsInNamedCalendar function", () => {
    let obj = new AWCalendar();
    expect(obj.findAllEventsInNamedCalendar).to.not.equal(undefined);
  });

  it("should define a deleteEvent function", () => {
    let obj = new AWCalendar();
    expect(obj.deleteEvent).to.not.equal(undefined);
  });

  it("should define a deleteEventFromNamedCalendar function", () => {
    let obj = new AWCalendar();
    expect(obj.deleteEventFromNamedCalendar).to.not.equal(undefined);
  });

  it("should define a modifyEventWithOptions function", () => {
    let obj = new AWCalendar();
    expect(obj.modifyEventWithOptions).to.not.equal(undefined);
  });

  it("should define a modifyEvent function", () => {
    let obj = new AWCalendar();
    expect(obj.modifyEvent).to.not.equal(undefined);
  });

  it("should define a modifyEventInNamedCalendar function", () => {
    let obj = new AWCalendar();
    expect(obj.modifyEventInNamedCalendar).to.not.equal(undefined);
  });

  it("should define a listCalendars function", () => {
    let obj = new AWCalendar();
    expect(obj.listCalendars).to.not.equal(undefined);
  });

  it("should define a listEventsInRange function", () => {
    let obj = new AWCalendar();
    expect(obj.listEventsInRange).to.not.equal(undefined);
  });
});
