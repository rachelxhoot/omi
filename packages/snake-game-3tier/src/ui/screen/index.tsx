import * as css from './index.css'
import { WeElement, h, tag } from 'omi'
import { rpx } from '../rpx'
import { Store } from 'src/store'

@tag('game-screen')
export default class extends WeElement {

  static css = rpx(css.default)

  store: Store
  
  render() {
    const { store } = this
    return (
      <div class="screen">
        {store.state.value.map.map(row => {
          return <p>
            {row.map(col => {
              if (col) {
                return <b class='s'></b>
              }
              return <b></b>
            })}
          </p>
        })}
      </div>
    )
  }
}

