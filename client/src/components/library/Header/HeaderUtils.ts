import {globalHelper} from "../../../global/scripts/globalHelper";
export function toggleHeader(): void {
    if(globalHelper.getViewPortSizes()[0] < 630)
    {
        const menu:HTMLElement = document.querySelectorAll('.menu_list_header')[0] as HTMLElement;
        if(menu.classList.contains('animation_slide_on')) {
            menu.classList.remove('animation_slide_on');
            menu.classList.add('animation_slide_off');
            setTimeout(function() {
                menu.classList.remove('animation_slide_off', 'menu_list_item_header--active')
            }, 300)
        }
        else {
            menu.classList.add('animation_slide_on', 'menu_list_item_header--active');
        }

    }
}
const menuContainer  = document.querySelector('.header__container');
if (menuContainer) {
    menuContainer.addEventListener('click', toggleHeader);
}
