import * as React from 'react'
import PropTypes from 'prop-types'

import { HardDrive, NetworkAlt, Folder, Cloud } from 'iconoir-react'
import { Typography } from '@material-ui/core'

import { rowStyles } from 'client/components/Tables/styles'

const Row = ({ original, value, ...props }) => {
  const classes = rowStyles()
  const { ID, NAME, HOSTS, DATASTORES, VNETS, PROVIDER_NAME } = value

  return (
    <div {...props}>
      <div className={classes.main}>
        <div className={classes.title}>
          <Typography className={classes.titleText} component='span'>
            {NAME}
          </Typography>
        </div>
        <div className={classes.caption}>
          <span>{`#${ID}`}</span>
          <span title={`Total Hosts: ${HOSTS}`}>
            <HardDrive size={16} />
            <span>{` ${HOSTS}`}</span>
          </span>
          <span title={`Total Datastores: ${DATASTORES}`}>
            <Folder size={16} />
            <span>{` ${DATASTORES}`}</span>
          </span>
          <span title={`Total Virtual Networks: ${VNETS}`}>
            <NetworkAlt size={16} />
            <span>{` ${VNETS}`}</span>
          </span>
          {PROVIDER_NAME && <span title={`Provider: ${PROVIDER_NAME}`}>
            <Cloud size={16} />
            <span>{` ${PROVIDER_NAME}`}</span>
          </span>}
        </div>
      </div>
    </div>
  )
}

Row.propTypes = {
  original: PropTypes.object,
  value: PropTypes.object,
  isSelected: PropTypes.bool,
  handleClick: PropTypes.func
}

export default Row