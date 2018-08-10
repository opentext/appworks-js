export abstract class AWPlugin {
  /**
   * Base plugin class. Constructor takes in a success function and error function to be executed upon
   * return from call to native layer
   * @param successHandler - the function to be executed when the native call succeeds. passes an object as arg
   * @param errorHandler - the function to be executed when the native call fails. passes an object as arg.
   */
  constructor(protected successHandler: any, protected errorHandler: any) {
  }
}
