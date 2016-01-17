class CommonUtil {

  public static strToUnsignedNum(str: string): any {
    if (str.match(/[^0-9]+/) || str === "") {
      return false;
    }
    return Number(str);
  }

}
export = CommonUtil;
