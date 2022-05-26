import {appiKeys} from 'appi_react'
import {Walk, UserTile} from 'appi_react_components'

export default function UserGrid({userIds,onUser}) {
  return (
    <Walk object={userIds}>{([publicView])=> {return(
        <div className={'gvt'} style={{'--gr':'minmax(0px,1fr)','--gc':'minmax(0px,1fr)'}}>
            <div className={'gvt'} style={{height:'auto','--gr':'repeat(auto-fit, minmax(72px, 1fr))','--gc':'repeat(auto-fit, minmax(72px, 1fr))', '--gg':'0px'}}>
              {appiKeys(publicView).map(k=><UserTile key={k} onUser={onUser} userId={k} profile={publicView?.[k]?.profile} />)}
            </div>
        </div>)}}
    </Walk>
)};

