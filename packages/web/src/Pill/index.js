import { Props as PillProps } from './Pill';
import { Props as PillsGroupProps } from './PillsGroup';

export { default as PillsGroup } from './PillsGroup';
export { default as Pill } from './Pill';
export {
    PillProps
    PillsGroupProps
}
/**
 * @render react
 * @name Pills
 * @description Group of Pills
 * @example
 *       <Pill.Group default={1} vertical={boolean('vertical', false)}>
 *        <Pill id={1} label="Dashboard" badge="23" />
 *        <Pill id={2} label="Projects" badge="99+" />
 *        <Pill id={3} label="Issues" badge="6" />
 *        <Pill id={4} label="Reports" />
 *        <Pill id={5} label="User Center" />
 *      </Pill.Group>
 */
