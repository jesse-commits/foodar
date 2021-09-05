
import '../styles/styles.css'
import Banner from './modules/Banner'
import Request from './modules/Request'

alert("testing")

if(module.hot) {
    module.hot.accept()
}

new Banner()
new Request()

