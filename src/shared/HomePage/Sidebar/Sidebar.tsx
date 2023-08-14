import React from 'react';
import styles from './sidebar.module.css';
import {  MyList } from '../../GenericList'
import { SpecialBorderContainer } from '../../SpecialBorderContainer';
import { NavLink } from '../../ProfileLink';
import { Icon, EIcons } from '../../Icon';

export function Sidebar() {
  function list() {
    return [
      <NavLink txt='profile' href='./' svg={<Icon name={EIcons.user} size={20} />}/>,
      <NavLink txt='messages' href='./' svg={<Icon name={EIcons.messages} size={20} />}/>,
      <NavLink txt='home' href='./' svg={<Icon name={EIcons.home} size={20} />}/>,
      <NavLink txt='settings' href='./' svg={<Icon name={EIcons.settings} size={20} />}/>,
    ]
  }

  return (
    <div className={styles.container}>
      <SpecialBorderContainer padding='20px'>
        <MyList items={list()} />
      </SpecialBorderContainer>
    </div>
  );
}
