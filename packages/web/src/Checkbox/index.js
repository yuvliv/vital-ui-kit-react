import { Props as CheckboxProps } from './Checkbox';
import { State as Checkboxstate } from './Checkbox';

export { default as Checkbox } from './Checkbox';
export { default as CheckboxGroup } from './CheckboxGroup';

export {
    CheckboxProps,
    Checkboxstate
}

/** @render react
 * @name CheckboxGroup
 * @description Group of checkboxes
 * @example
 * <CheckboxGroup>
 *  <Checkbox
 *    isRound
 *    label="checkbox 1"
 *  />
 *  <Checkbox
 *    isRound
 *    label="checkbox 2"
 *  />
 *  <Checkbox
 *    isRound
 *    label="checkbox 3"
 *  />
 * </CheckboxGroup>
 */
