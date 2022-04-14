import { IBaseFormItemPropsWithOutFocus } from '../_base';

export type PickerValue = Date;
/**
 * @description 对话框
 */
export interface IDatePickerProps extends IBaseFormItemPropsWithOutFocus {
  /**
   * @description 时间格式化显示YYYY-MM-DD
   */
  format?: string;
  /**
   * @description 最小值
   * @default 十年前
   */
  min?: Date;
  /**
   * @description 最大值
   * @default 十年后
   */
  max?: Date;
  /**
   * @description 当前数据
   */
  value: PickerValue;
  /**
   * @description 标题
   */
  title?: string;
  /**
   * @description 确定按钮文案
   * @default "确定"
   */
  okText?: string;
  /**
   * @description 取消文案
   * @default "取消"
   */
  dismissText?: string;
  /**
   * @description 提示文案
   */
  placeholder?: string;
  /**
   * @description 是否受控
   * @default false
   */
  controlled?: boolean;
  /**
   * @description 点击确认回调
   */
  onOk?: (value: PickerValue) => void;
  /**
   * @description 点击取消回调
   */
  onDismiss?: () => void;
  /**
   * @description 发生滚动即触发， 与 onChange 点击 ok 后触发不同
   */
  onChange?: (value: PickerValue) => void;
  /**
   * @description 精度
   * @default 'day'
   */
  precision: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
  // | 'week'
  // | 'week-day';
  /**
   * @description value 显示在输入框的格式
   */
  onFormat?: (value: PickerValue, data: number[][]) => string;
  /**
   * @description 切换显示隐藏
   */
  onTriggerPicker?: (visible) => void;
}
export declare const DatePickerDefaultProps: Partial<IDatePickerProps>;
