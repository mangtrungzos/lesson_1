const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')

line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

tabs.forEach((tab, index) => {
    // this as same as tabs
    // mỗi lần click vào tab này thì có thể lấy ra pane tương ứng với content của chính tab click vào
    const pane = panes[index]

    // declaration func
    tab.onclick = function() {
        
        $('.tab-item.active').classList.remove('active')
        // trước khi add class active vào thì đi tìm đối tượng có chứa class active sau đó sẽ gỡ bỏ nó đi
        this.classList.add('active')

        line.style.left = this.offsetLeft + 'px' // Can replace this with tabs
        line.style.width = this.offsetWidth + 'px'


        $('.tab-pane.active').classList.remove('active')
        pane.classList.add('active')
    
    }

    // arrow func
    // tab.onclick = (event) => {
    //     console.log(event.target)
    // }
})

