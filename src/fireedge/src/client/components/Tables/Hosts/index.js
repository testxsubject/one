import React, { useEffect } from 'react'

import { useAuth } from 'client/features/Auth'
import { useFetch } from 'client/hooks'
import { useHost, useHostApi } from 'client/features/One'

import { SkeletonTable, EnhancedTable } from 'client/components/Tables'
import HostColumns from 'client/components/Tables/Hosts/columns'
import HostRow from 'client/components/Tables/Hosts/row'
import HostDetail from 'client/components/Tables/Hosts/detail'

const HostsTable = () => {
  const columns = React.useMemo(() => HostColumns, [])

  const hosts = useHost()
  const { getHosts } = useHostApi()
  const { filterPool } = useAuth()

  const { status, fetchRequest, loading, reloading, STATUS } = useFetch(getHosts)
  const { INIT, PENDING } = STATUS

  useEffect(() => { fetchRequest() }, [filterPool])

  if (hosts?.length === 0 && [INIT, PENDING].includes(status)) {
    return <SkeletonTable />
  }

  return (
    <EnhancedTable
      columns={columns}
      data={hosts}
      isLoading={loading || reloading}
      getRowId={row => String(row.ID)}
      renderDetail={row => <HostDetail id={row.ID} />}
      RowComponent={HostRow}
    />
  )
}

export default HostsTable