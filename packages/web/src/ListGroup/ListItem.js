// @flow

import React, { Fragment } from 'react';
import styled from 'styled-components';

import { ListContent } from './styled';
import IconBase from '../Icon/';
import type { ListItemType } from './type';

const Icon = styled(IconBase)`
  position: absolute;
  ${'' /* top: 50%; */}
  right: 15px;
  ${'' /* margin-top: -5px; */}
  pointer-events: none;
  color: ${props => (props.open ? '#00C3FF' : 'inherit')};
  transform: ${props => (props.open ? `rotateZ(-180deg)` : `rotateZ(0deg)`)};
  transition: all 0.2s ease;
  transform-origin: center center;
`;

type Props = {
  item: ListItemType,
  renderBadge?: (item: ListItemType) => Node,
}

const ListItem = ({ item, renderBadge }: Props) => {
  const iconHandler = () => (item.children ? 'icon-chevron-down' : 'icon-chevron-right');

  return (
    <Fragment>
      <ListContent>{item.content}</ListContent>
      {renderBadge && renderBadge(item)}
      {(item.href || item.children) && (
        <Icon open={item.open} className={iconHandler()} size="10" />
      )}
    </Fragment>
  );
};

export default ListItem;