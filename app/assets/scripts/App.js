
import '../styles/styles.css'
import Banner from './modules/Banner'
import Request from './modules/Request'



if(module.hot) {
    module.hot.accept()
}

new Banner()
new Request()

