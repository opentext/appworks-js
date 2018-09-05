import {AWPlugin} from "../../common/plugin";
import {AWProxy} from "../../common/proxy";

export class AWMobileFileSystem extends AWPlugin {
  // File listing
  list(directory: string, shared: boolean, success: any, error: any) {
    let args = [directory, shared];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "list",
      args
    );
  }

  // Imports
  listImports(success: any, error: any) {
    let args = [];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "listImports",
      args
    );
  }

  moveImport(source: string, destination: string, desintationShared: boolean, success: any, error: any) {
    let args = [source, destination, desintationShared];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "moveImport",
      args
    );
  }

  // File IO
  exists(source: string, shared: boolean, success: any, error: any) {
    let args = [source, shared];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "exists",
      args
    );
  }

  isOpen(source: string, shared: boolean, success: any, error: any) {
    let args = [source, shared];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "isOpen",
      args
    );
  }

  rename(source: string, destination: string, shared: boolean, success: any, error: any) {
    let args = [source, destination, shared];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "rename",
      args
    );
  }

  copy(source: string, sourceShared: boolean, destination: string, destinationShared: boolean, success: any, error: any) {
    let args = [source, sourceShared, destination, destinationShared];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "copy",
      args
    );
  }

  move(source: string, sourceShared: boolean, destination: string, destinationShared: boolean, success: any, error: any) {
    let args = [source, sourceShared, destination, destinationShared];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "move",
      args
    );
  }

  remove(source: string, shared: boolean, success: any, error: any) {
    let args = [source, shared];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "remove",
      args
    );
  }

  read(source: string, shared: boolean, success: any, error: any) {
    let args = [source, shared];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "read",
      args
    );
  }

  // File sharing
  open(source: string, shared: boolean, success: any, error: any) {
    let args = [source, shared];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "open",
      args
    );
  }

  share(source: string, shared: boolean, success: any, error: any) {
    let args = [source, shared];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "share",
      args
    );
  }

  quicklook(source: string, shared: boolean, success: any, error: any) {
    let args = [source, shared];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "quicklook",
      args
    );
  }

  // File transfer
  download(source: string, destination: string, headers: any, shared: boolean, success: any, error: any) {
    let args = [source, destination, headers, shared];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "download",
      args
    );
  }

  upload(source: string, destination: string, fileParameterName: string, formData: any, headers: any, shared: boolean, success: any, error: any) {
    let args = [source, destination, fileParameterName, formData, headers, shared];
    AWProxy.exec(
      success,
      error,
      "AWMobileFileSystem",
      "upload",
      args
    );
  }
}
