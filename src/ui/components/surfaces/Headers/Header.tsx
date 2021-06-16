import React from 'react';
import { HeaderAppBar, HeaderLogo } from './styled'
import { Toolbar, Container } from '@material-ui/core'
export const Header: React.FC = () => {
  return (
    <>
      <HeaderAppBar position={'sticky'}>
        <Toolbar component={Container}>
          <HeaderLogo src={'/img/logos/logo.svg'} alt="e-diarista" />
        </Toolbar>
        <div>

        </div>
      </HeaderAppBar>
    </>
  )
}
