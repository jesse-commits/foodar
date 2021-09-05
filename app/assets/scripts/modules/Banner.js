
class Banner {

    constructor() {
        this.injectHTML()
        this.closeIcon = document.querySelector(".modal__close")
        this.events()
    }

    events() {
        // set timer for 4 seconds
        setTimeout(function(){
            let ourModal = document.querySelector(".modal")
            ourModal.classList.add("modal--is-visible")
        }, 4000)
        // listen for close click and close the advertisement
            let closeIcon = document.querySelector(".icon")
            let ourModal = document.querySelector(".modal")
            let closeConnect = document.querySelector(".connect")
            closeIcon.addEventListener("click", function() {
            ourModal.classList.remove("modal--is-visible")
            })
            closeConnect.addEventListener("click", function() {
            ourModal.classList.remove("modal--is-visible")
            })
        // pushes the escape key to also close the advertisement
            document.addEventListener("keyup", function(e){
                if(e.keyCode == 27){
                    let ourModal = document.querySelector(".modal") 
                    ourModal.classList.remove("modal--is-visible")
                }
            })
    } 


    injectHTML() {
        document.body.insertAdjacentHTML('beforebegin', `
            <div class="modal">
                <div class="advertisement-banner">
                    <div class="advertisement-banner__title">
                        Jane Doe
                        <div class="advertisement-banner__close icon">X</div>
                    </div>
                    <div class="advertisement-banner__friend-request">
                        1 new friend request
                    </div>
                    <div class="row--medium-6 row--padding">
                        <div class="advertisement-banner__logo">
                            <img src="./assets/images/friend-logo.jpg" alt="logo">
                        </div>
                        <div class="advertisement-banner__content">
                            CEO at Mighty Schools.  Marketing and Advertising.  Seeking new software developers for great opportunities.
                        </div>
                    </div>
                    <div class="advertisement-banner__connect connect">
                    + Connect
                    </div>
                </div>
            </div>
        `)
    }
}

export default Banner